<?php
session_start();
$subtitle = 'すべてのいいねボタン | ';
include_once('inc/_header.php');
?>

<main>
  <?php include_once('inc/_sidebar.php'); ?>

  <div id="contents">
    <h2>すべてのいいねボタン</h2>
    <p class="memo">
      ボタン名をクリックすると月別のいいねログデータが見られます。<br>
      ※一度もいいねされていないボタンは一覧に表示されません。
    </p>
    <p class="memo"></p>

    <?php
    echo $newiineAdm->allBtnReport();
    ?>
  </form>

</div>
</main>

<?php include_once('inc/_footer.php'); ?>
