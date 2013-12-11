//    YouHtml5, chrome/chromium extension; allows to watch any YouTube
//    video without flash player.
//    Copyright (C) 2013  Eternal Sorrow

//    This program is free software: you can redistribute it and/or modify
//    it under the terms of the GNU General Public License as published by
//    the Free Software Foundation, either version 3 of the License, or
//    (at your option) any later version.

//    This program is distributed in the hope that it will be useful,
//    but WITHOUT ANY WARRANTY; without even the implied warranty of
//    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//    GNU General Public License for more details.

//    You should have received a copy of the GNU General Public License
//    along with this program.  If not, see <http://www.gnu.org/licenses/>.

// ==UserScript==
// @match http://www.youtube.com/watch*
// @match https://www.youtube.com/watch*
// @match http://youtube.com/watch*
// @match https://youtube.com/watch*
// ==/UserScript==

function get_param_value(param)
{
	var get_array = window.location.search.substring(1).split("&"); 
	for(var i=0; i<get_array.length; i++)
	{
		var get_var = get_array[i].split("=");
		if(get_var[0]==param)
			return get_var[1];
	}
}


var flash_player=document.getElementById("movie_player");
if((typeof(flash_player)!="undefined")&&(flash_player.tagName=="EMBED"))
{
	var player_parent=flash_player.parentNode;
	var video_frame = document.createElement('iframe')
	video_frame.setAttribute("width",640);
	video_frame.setAttribute("height",390);
	video_frame.style.border=0;
	video_frame.setAttribute("src","//www.youtube.com/embed/"+get_param_value("v")+"?autoplay=1&autohide=1&modestbranding=1&fs=1");
	video_frame.setAttribute("allowfullscreen","");
	while (player_parent.firstChild)
		player_parent.removeChild(player_parent.firstChild);
	player_parent.appendChild(video_frame);
}
