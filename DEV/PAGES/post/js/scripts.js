// Side Menu(s) Icon JS FA
$(document).ready(function() {
   // Categories Side Menu
   $('#category-side-menu .collapse').on('show.bs.collapse', function() {
      var $category_menu_fa_icon = $(this).prev();
      $category_menu_fa_icon.find('span').removeClass('fa-chevron-down').addClass('fa-chevron-up');
   });
   $('#category-side-menu .collapse').on('hide.bs.collapse', function() {
      var $category_menu_fa_icon = $(this).prev();
      $category_menu_fa_icon.find('span').removeClass('fa-chevron-up').addClass('fa-chevron-down');   
   });
      // Archives Side Menu
      $('#archives-side-menu .collapse').on('show.bs.collapse', function() {
      var $archive_menu_fa_icon = $(this).prev();
      $archive_menu_fa_icon.find('span').removeClass('fa-chevron-down').addClass('fa-chevron-up');
   });
   $('#archives-side-menu .collapse').on('hide.bs.collapse', function() {
      var $archive_menu_fa_icon = $(this).prev();
      $archive_menu_fa_icon.find('span').removeClass('fa-chevron-up').addClass('fa-chevron-down');   
   });
   // Social Side Menu
   $('#social-side-menu .collapse').on('show.bs.collapse', function() {
      var $social_menu_fa_icon = $(this).prev();
      $social_menu_fa_icon.find('span').removeClass('fa-chevron-down').addClass('fa-chevron-up');
   });
   $('#social-side-menu .collapse').on('hide.bs.collapse', function() {
      var $social_menu_fa_icon = $(this).prev();
      $social_menu_fa_icon.find('span').removeClass('fa-chevron-up').addClass('fa-chevron-down');   
   });
});
// Side Menu(s) Icon JS FA
