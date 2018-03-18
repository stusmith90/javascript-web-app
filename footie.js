    $(document).ready(function(){
		$.getJSON('epl_clubs.json', function (data) {
			var getClubs = data.clubs;
			$(".title").append(data.name);
			$(".main").append('<img src="' + getClubs[1].crest + '" <br>');
				$(".main").append('<p><b>Position: ' + getClubs[1].position + '</b><br>');
				$(".main").append('<p><b>Last 5 Fixtures: ' +getClubs[1].last_5_fixtures + '</b><br>');
				$(".main").append('<p><b>Next Fixture: ' + getClubs[1].next_fixture + '</b><br>');
			for (var i in getClubs) {
				var teamName = $(".medium-3");
				$(teamName[i]).append('<img src="' + getClubs[i].crest +'" <br>');
				$(teamName[i]).append('<p>' + getClubs[i].name + '</b>');
				$(teamName[i]).addClass(getClubs[i].code);
				i++;
				}
				$('.medium-3').each(function(i, obj) {
					$(obj).click(function() {
					var getClubCode =  $(obj).attr("class").toString().split(' ')[2];
					for(var i in getClubs){
					if(getClubCode == getClubs[i].code){
						$('.main').empty();
						$(".main").append('<img src="' + getClubs[i].crest + '" <br>');
						$(".main").append('<p><b>Position: ' + getClubs[i].position + '</b><br>');
						$(".main").append('<p><b>Last 5 Fixtures: ' +getClubs[i].last_5_fixtures + '</b><br>');
						$(".main").append('<p><b>Next Fixture: ' + getClubs[i].next_fixture + '</b><br>');
					}
					i++;
					}
				});
				});
				});
				});