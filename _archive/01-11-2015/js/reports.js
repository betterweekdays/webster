$(function($) {

    var $topSelect = $('select[name="dropdownmain"]');
    var $nestedSelects = $('select[name!="dropdownmain"]select[name!="contains"]select[name!="filter"]select[name!="role"]select[name!="load"]');

    var $jobsFilter = $('.jobs-filter');
    var $activitiesFilter = $('.activities-filter');

    function showApplicableSelect() {
        $nestedSelects.hide();
        $jobsFilter.hide();
        $activitiesFilter.hide();

        $('select[name="' + $topSelect.val() + '"]').show();

        if ($topSelect.val() === 'jobs') {
            $jobsFilter.show();
        }

        if ($topSelect.val() === 'activities') {
            $activitiesFilter.show();
        }
    }

    showApplicableSelect();
    $topSelect.change(showApplicableSelect);

});

// Based on:
// http://jsfiddle.net/p7jyv/5/


