// JavaScript Document
$(function(){


$("#menu select").change(function() {
  window.location = $(this).find("option:selected").val();
});

	

		 });//jquery end