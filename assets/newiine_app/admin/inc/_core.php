<?php

///////////////////////////////////////////////////
// いいねボタン改 Ver2.4
// 製作者    ：ガタガタ
// サイト    ：https://do.gt-gt.org/
// ライセンス：MITライセンス
// 全文      ：https://ja.osdn.net/projects/opensource/wiki/licenses%2FMIT_license
// 公開日    ：2021.12.30
// 最終更新日：2023.06.08
//
// このプログラムはどなたでも無償で利用・複製・変更・
// 再配布および複製物を販売することができます。
// ただし、上記著作権表示ならびに同意意志を、
// このファイルから削除しないでください。
///////////////////////////////////////////////////

$include = get_included_files();
if (array_shift($include) === __FILE__) {
    die('このファイルへの直接のアクセスは禁止されています。');
}

include_once(dirname(__FILE__).'/_config.php');
include_once(dirname(__FILE__).'/../../newiine.php');

class newiine_admin extends newiine {

  	// コンストラクタ宣言
  	public function __construct() {

      date_default_timezone_set('Asia/Tokyo');
      $this->today = date("Y/m/d");
      $this->yesterday = date('Y/m/d', strtotime('-1 day'));
      $this->perpage = 20;

      if(file_exists(dirname(__FILE__).'/../../datas/setting/fav.dat')) {
        $this->favarr = file(dirname(__FILE__).'/../../datas/setting/fav.dat',FILE_IGNORE_NEW_LINES);
      } else {
        $this->favarr = array();
      }

      if(isset($_GET['page'])) {
        $this->page = $_GET['page'];
      } else {
        $this->page = 1;
      }

      if(isset($_GET['mode'])) {
        $this->mode = $_GET['mode'];
      } else {
        $this->mode = '';
      }

  	}

    private function getAllDatas() {
      global $btnOrder;
      
      setlocale(LC_ALL, 'ja_JP.UTF-8');

      $filenames = glob(dirname(__FILE__, 3). '/datas/*.csv');
      $allDatas = Array();

      if ($btnOrder === 'name_asc') {
        sort($filenames);
      } elseif($btnOrder === 'name_desc') {
        rsort($filenames);
      }
      
      foreach ($filenames as $key => $filename) {
        $newFileName = basename($filename, '.csv');
        $data = $this->openCSV($newFileName, true);
        $allDatas[$newFileName] = $data[1];
      }

      return $allDatas;
      
    }

    // いいねボタンの総いいね数を返す関数
    public function newiineSum($btnName, $day = null) {
      $sum = 0;
      if($day === null) {
        list($num, $csvArray) = $this->openCSV($btnName, true);
        if($csvArray !== false) {
            foreach ($csvArray as $value) {
                $sum = $sum + $value[5];
            }
        }
      }
        
        return $sum;
    }

    // 個別のいいねボタンの詳細ないいねログデータ
    public function BtnDetail($btnName, $month = null) {
      list($num, $csvArray) = $this->openCSV($btnName, true);

      if($csvArray === false) {
        return 'データがありません。';
      }

      if( $month === null ) {
        $month =  date("Y/m");
      }
      $month2 = date('Y-m', strtotime($month . '/01'));
      $firstDay = date('d', strtotime('first day of' . $month));
      $lastDay = date('d', strtotime('last day of' .$month2));
      $detailArray = [];
      $detailsum = 0;

      $htmlRoop = '';
      $oldestDate = $this->today;

      for ($i=$lastDay; $i >= $firstDay; $i--) { 
        $i = str_pad($i, 2, 0, STR_PAD_LEFT);
        $key = $month . '/' . $i;
        $dow = date('w', strtotime($key));
        $week = [
          '日', //0
          '月', //1
          '火', //2
          '水', //3
          '木', //4
          '金', //5
          '土', //6
        ];
        if ($this->today < $key) {
          continue;
        }
        $detailArray[$key] = 0;

        foreach ($csvArray as $value) {
          if($oldestDate > $value[3]) {
            $oldestDate = $value[3];
          }
          $pattern = '/' . preg_quote($month, '/') . '/';
          if(!preg_match($pattern, $value[3])) {
            continue;
          }
          if ($value[3] === $key) {
            $detailArray[$key] = $detailArray[$key] + $value[5];
          }
        }
        $htmlRoop .= '<tr>';
        $htmlRoop .= '<th class="week_'.$dow.'">';
        $htmlRoop .= $key .'（'. $week[$dow] .'）';
        $htmlRoop .= '</th>';
        $htmlRoop .= '<td>';
        if($detailArray[$key] === 0) {
          $htmlRoop .= '-';
        } else {
          $htmlRoop .= $detailArray[$key] . ' 回';
        }
        $htmlRoop .= '</td>';
        $htmlRoop .= '</tr>';
        $detailsum = $detailsum + $detailArray[$key];
      }

      $html = '<h2>「'.$btnName.'」のいいねログ - ' . date('Y年m月',strtotime($month . '/01')).'</h2>';
      
      if ($oldestDate >= $month .'/'.$firstDay) {
        $html .= '<p class="memo">このいいねボタンでは'.$oldestDate.'以前のいいねログデータがありません。<br>いいねログデータを保持する期間は<a href="setting.php">設定変更ページ</a>から変更できます。</p>';
      }

      $html .= '<div class="page">';

      $prevpage = date('Y/m', strtotime($month2 . ' -1 month'));
      $nextpage = date('Y/m', strtotime($month2 . ' +1 month'));

      if ($oldestDate < $month .'/'.$firstDay) {
        $html .= '<a href="?btnname='.$btnName.'&month='.$prevpage.'" class="prev"><span class="material-icons">navigate_before</span>前月</a><div></div>';
      }
      if ($this->today > $month .'/'.$lastDay) {
        $html .= '<div></div><a href="?btnname='.$btnName.'&month='.$nextpage.'" class="next">次月<span class="material-icons">navigate_next</span></a>';
      }

      $html .= '</div>';
      $html .= '<table>';
      $html .= '<thead>';
      $html .= '<tr>';
      $html .= '<th>';
      $html .= '月の合計';
      $html .= '</th>';
      $html .= '<td>';
      $html .= $detailsum . ' 回';
      $html .= '</td>';
      $html .= '</tr>';
      $html .= '</thead>';

      $html .= $htmlRoop;

      $html .= '</table>';
  
      $html .= '<div class="page">';

      $prevpage = date('Y/m', strtotime($month2 . ' -1 month'));
      $nextpage = date('Y/m', strtotime($month2 . ' +1 month'));

      if ($oldestDate < $month .'/'.$firstDay) {
        $html .= '<a href="?btnname='.$btnName.'&month='.$prevpage.'" class="prev"><span class="material-icons">navigate_before</span>前月</a><div></div>';
      }
      if ($this->today > $month .'/'.$lastDay) {
        $html .= '<div></div><a href="?btnname='.$btnName.'&month='.$nextpage.'" class="next">次月<span class="material-icons">navigate_next</span></a>';
      }

      $html .= '</div>';


      return $html;
    }

    public function recentlyReport() {
      $allDatas = $this->getAllDatas();
      $selectedDatas = array();
      $sums = array();
      $todaySums = array();
      $yesterdaySums = array();

      // それぞれのボタンが今日もしくは昨日いいねされたか判定
      foreach ($allDatas as $key => $datas) {
        $todaySums[$key] = 0;
        $yesterdaySums[$key] = 0;
        foreach ($datas as $data) {
          if($data[3] === $this->today || $data[3] === $this->yesterday) {
            $selectedDatas[$key] = $data;
            if($data[3] === $this->today){
              $todaySums[$key] = $todaySums[$key] + $data[5];
            } elseif($data[3] === $this->yesterday) {
              $yesterdaySums[$key] = $yesterdaySums[$key] + $data[5];
            }
          }
        }
        if(!empty($selectedDatas[$key])) {
          $sums[$key] = $this->newiineSum($key);
        }
      }

      // 今日もしくは昨日いいねされたもののデータだけを返す
      // それぞれのボタンの直近のいいねデータを整理
      $html = '';
      if(empty($selectedDatas)) {
        $html .= '<p>データがありません。</p>';
      } else {
        $html .= '<form method="post" action="inc/_fav.php">';
        $html .= '<table>';
        $html .= '<thead>';
        $html .= '  <tr>';
        $html .= '    <th>ボタン名</th>';
        $html .= '    <th>設置アドレス</th>';
        $html .= '    <th>いいね数</th>';
        $html .= '  </tr>';
        $html .= '</thead>';
        $html .= '<tbody>';

        foreach ($selectedDatas as $key => $data) {
          
        $tmp = array();
        $array_result = array();

          foreach( $allDatas[$key] as $value ){
              // 配列に値が見つからなければ$tmpに格納
              if( !in_array( $value[0], $tmp ) ) {
               $tmp[] = $value[0];
               $array_result[] = $value;
              }
          }
          
          
          $html .= '<tr>';
          $html .= '<th><a href="detail.php?btnname='.$key.'"">'.$key.'</a>';

          if (in_array($key, $this->favarr, true)) {
            $html .= '<button type="submit" class="fav_button faved" name="favorite" value="'.$key.'"><span class="material-icons" style="font-size:16px;vertical-align:middle">favorite</span></input></th>';
          } else {
            $html .= '<button type="submit" class="fav_button" name="favorite" value="'.$key.'"><span class="material-icons" style="font-size:16px;vertical-align:middle">favorite</span></input></th>';
          }

          $html .= '<td>';
          foreach ($array_result as $page) {
            $short_url = mb_strimwidth( $page[0], 0, 40, '…', 'UTF-8' );
            $title = $this->getHTMLtitle($page[0]);
            $html .= '<a href="'.$page[0].' "target="_blank">'.$short_url.'<span style="font-size:90%;">（'.$title.'）</span></a>';
            if($page !== end($array_result)){
                $html .= '<br>';
            }
          }
          $html .= '</td>';
          $html .= '  <td>';
          $html .= '   今日：'.$todaySums[$key].'<br>';
          $html .= '    昨日：'.$yesterdaySums[$key].'<br>';
          $html .= '   合計：'.$this->newiineSum($key);
          $html .= ' </td>';
          $html .= ' </tr>';
        }
        $html .= '</tbody>';
        $html .= '</table>';
        $html .= '</form>';

      }

      echo $html;
    }

    public function allBtnReport($mode = null) {
      $allDatas = $this->getAllDatas();
      $selectedDatas = array();
      $sums = array();
      $todaySums = array();
      $yesterdaySums = array();

      if ($mode === 'fav') {
        $newArr = array();
        foreach ($allDatas as $key => $datas) {
         if (in_array($key, $this->favarr)) {
          $newArr[$key] = $allDatas[$key];
         }
        }
        $allDatas = $newArr;
      }

      // それぞれのボタンが今日もしくは昨日いいねされたか判定
      foreach ($allDatas as $key => $datas) {
        $todaySums[$key] = 0;
        $yesterdaySums[$key] = 0;
        for ($i=0; $i < count($datas); $i++) { 
          if($datas[$i][3] === $this->today || $datas[$i][3] === $this->yesterday) {
            $selectedDatas[$key] = $datas[$i];
            if($datas[$i][3] === $this->today){
              $todaySums[$key] = $todaySums[$key] + $datas[$i][5];
            } elseif($datas[$i][3] === $this->yesterday) {
              $yesterdaySums[$key] = $yesterdaySums[$key] + $datas[$i][5];
            }
          }
        }
        if(!empty($selectedDatas[$key])) {
          $sums[$key] = $this->newiineSum($key);
        }
      }

      // 今日もしくは昨日いいねされたもののデータだけを返す
      // それぞれのボタンの直近のいいねデータを整理
      $html = '';
      if(empty($allDatas)) {
        $html .= '<p>データがありません。</p>';
      } else {
        if ($this->mode === 'rank') {
          $html .= '<p style="text-align:right;font-size:90%;"><a href="?page=1">いいねボタン名前順に並べ替え</a></p>';
        } else {
          $html .= '<p style="text-align:right;font-size:90%;"><a href="?mode=rank">いいね数が多い順に並べ替え</a></p>';
        }

        $html .= '<form method="post" action="inc/_fav.php">';
        $html .= '<table>';
        $html .= '<thead>';
        $html .= '  <tr>';
        $html .= '    <th>ボタン名</th>';
        $html .= '    <th>設置アドレス</th>';
        $html .= '    <th>いいね数</th>';
        $html .= '  </tr>';
        $html .= '</thead>';
        $html .= '<tbody>';

        $countitem = 0;
        $startitem = ($this->page - 1) * ($this->perpage);
        $enditem = $this->page * $this->perpage -1;
        
        $prevfrag = false;
        $nextfrag = false;
        $sumarray = array();

        $newarray = array();

        if($this->mode === 'rank') {

          foreach ($allDatas as $key => $data) {
          $sumarray[$key] = $this->newiineSum($key);
          }

          arsort($sumarray);
          
          foreach ($sumarray as $key => $data) {
            $newarray[$key] = $allDatas[$key];
          }

          $allDatas = $newarray;

        }

        foreach ($allDatas as $key => $data) {

          if($countitem > $enditem) {
            $nextfrag = true;
            break;
          } elseif ($countitem < $startitem) {
            ++$countitem;
            $prevfrag = true;
            continue;
          }
          
        $tmp = array();
        $array_result = array();

          foreach( $allDatas[$key] as $value ){
              // 配列に値が見つからなければ$tmpに格納
              if( !in_array( $value[0], $tmp ) ) {
               $tmp[] = $value[0];
               $array_result[] = $value;
              }
          }

          $html .= '<tr>';
          $html .= '<th><a href="detail.php?btnname='.$key.'"">'.$key.'</a>';

          if (in_array( $key, $this->favarr)) {
            $html .= '<button type="submit" class="fav_button faved" name="favorite" value="'.$key.'"><span class="material-icons" style="font-size:16px;vertical-align:middle">favorite</span></input></th>';
          } else {
            $html .= '<button type="submit" class="fav_button" name="favorite" value="'.$key.'"><span class="material-icons" style="font-size:16px;vertical-align:middle">favorite</span></input></th>';
          }

          $html .= '<td>';
          for ($i=0; $i < count($array_result); $i++) { 
            $short_url = mb_strimwidth( $array_result[$i][0], 0, 40, '…', 'UTF-8' );
            $title = $this->getHTMLtitle($array_result[$i][0]);
            $html .= '<a href="'.$array_result[$i][0].' "target="_blank">'.$short_url.'<span style="font-size:90%;">（'.$title.'）</span></a>';
            if($array_result[$i] !== end($array_result)){
                $html .= '<br>';
            }
          }
          // foreach ($array_result as $page) {
          //   $short_url = mb_strimwidth( $page[0], 0, 40, '…', 'UTF-8' );
          //   $title = $this->getHTMLtitle($page[0]);
          //   $html .= '<a href="'.$page[0].' "target="_blank">'.$short_url.'<span style="font-size:90%;">（'.$title.'）</span></a>';
          //   if($page !== end($array_result)){
          //       $html .= '<br>';
          //   }
          // }
          $html .= '</td>';
          $html .= '  <td>';
          $html .= '   今日：'.$todaySums[$key].'<br>';
          $html .= '    昨日：'.$yesterdaySums[$key].'<br>';
          $html .= '   合計：'.$this->newiineSum($key);
          $html .= ' </td>';
          $html .= ' </tr>';

          ++$countitem;
        }
        $html .= '</tbody>';
        $html .= '</table>';
        $html .= '</form>';
        
        $html .= '<div id="pagenation">';

        $allitemcount = count($allDatas);
        $lastofpage = ceil($allitemcount / $this->perpage);

        if( $prevfrag  && $this->mode === 'rank' ) {
          $n = $this->page - 1;
          $html .= '<a href="?page=1&mode=rank" class="first"><<</a>';
          $html .= '<a href="?page='.$n.'&mode=rank" class="prev">前の'.$this->perpage.'件</a>';
        } elseif( $prevfrag ) {
          $n = $this->page - 1;
          $html .= '<a href="?page=1" class="first"><<</a>';
          $html .= '<a href="?page='.$n.'" class="prev">前の'.$this->perpage.'件</a>';
        }

        if( $prevfrag  || $nextfrag ) {
          $html .= '<div class="current"><p>'.$this->page.' / '.$lastofpage.'</p></div>';
        }

        if( $nextfrag && $this->mode === 'rank' ) {
          $n = $this->page + 1;
          $html .= '<a href="?page='.$n.'&mode=rank" class="next">次の'.$this->perpage.'件</a>';
          $html .= '<a href="?page='.$lastofpage.'&mode=rank" class="last">>></a>';
        } elseif( $nextfrag ) {
          $n = $this->page + 1;
          $html .= '<a href="?page='.$n.'" class="next">次の'.$this->perpage.'件</a>';
          $html .= '<a href="?page='.$lastofpage.'" class="last">>></a>';
        }

        $html .= '</div>';

      }

      echo $html;
    }

    // いいね拒否しているIPアドレスを表示する関数
    public function denyIP() {
      $html = '';
      
      $IPs = file(dirname(__FILE__).'/../../datas/setting/deny.dat');

      if(empty($IPs)) {
        $html .= '<p class="memo">現在いいねを拒否しているIPアドレスはありません。<br>';
        $html .= '※いいねした人のIPアドレスを調べる方法は<a href="tips.php#how_to_add_IP">こちら</a></p>';
      } else {
        $html .= '<p class="memo">現在いいねを拒否しているIPアドレス：<br>';
        foreach ($IPs as $IP) {
          $html .= $IP . '<br>';
        }
        $html .= '※いいねした人のIPアドレスを調べる方法は<a href="tips.php#how_to_add_IP">こちら</a><br>';
        $html .= '※拒否IPアドレスを削除する方法は<a href="tips.php#how_to_delete_IP">こちら</a>';
        $html .= '</p>';
      }

    echo $html;
  }

}

  ?>
