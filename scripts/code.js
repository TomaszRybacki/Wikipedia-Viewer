/*jslint es6 */

$(document).ready(function () {
    "use strict";
   $("#search").click(function () {
        let searchTerm = $("#searchFraze").val();
        let url = "https://pl.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";

       $.ajax({
            type: "GET",
            url: url,
            async: false,
            dataType: "json",
            success: function (data) {
                let i;
                $("#output").html("");
                for (i = 0; i < data[1].length; i++) {
                    $("#output").append("<li><h2>" + data[1][i] + "</h2><p>" + data[2][i] + "</p><a href='" + data[3][i] + "' target='_blank'>Link do Wikipedii</a></li>");
                }
            },
            error: function (errormessage) {
               alert("Error");
            }
        });
    });
});

