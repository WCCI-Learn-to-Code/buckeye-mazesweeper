author: Lauren Holloway & Brian Forsythe<br /><img id="logo" src="images/wcci-logo.png" />
title: Buckeye MazeSweeper
subtitle: Learn to Code: JavaScript
theme: league
# What can JavaScript do?

<h3 class="fragment">Originally created to support dynamic web pages</h3>

<ul>
	<li class="fragment">interacting with the user<br />(clicks, keypresses, prompts)</li>
	<li class="fragment">adding, removing, altering page elements<br />(manipulating the <strong>D</strong>ocument <strong>O</strong>bject <strong>M</strong>odel)</li>
</ul>

<p class="fragment">It is ubiquitous today, one of the most popular programming languages.</p>

# Examples

## Animation

<iframe src="./examples/circles/index.html" style="background-color: #ffffff; width: 80rem; height: 30rem;">No frame support</iframe>
<small>(Example courtesy of <a href="http://gwennaelbuchet.github.io/SceneGraph.js" target="_blank">SceneGraph.js Framework</a>)</small>

## Games

<iframe src="./examples/catchTheFlowers/index.html" style="background-color: #ffffff; text-align: center; width: 480px; height: 320px;">No frame support</iframe>
<small>(Example courtesy of <a href="http://gwennaelbuchet.github.io/SceneGraph.js" target="_blank">SceneGraph.js Framework</a>)</small>

## Charts and Graphs

<canvas id="myChart" style="background-color: #eee;"></canvas>
<p><a href="http://chartjs.org">Chart.js</a></p>

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.1.4/Chart.min.js"></script>
<script>
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [{
      label: 'apples',
      data: [12, 19, 3, 17, 6, 3, 7],
      backgroundColor: "rgba(10, 201, 0, 0.4)"
    }, {
      label: 'oranges',
      data: [2, 29, 5, 5, 2, 3, 10],
      backgroundColor: "rgba(248, 112, 0, 0.4)"
    }]
  }
});
</script>

## Calculator

<iframe src="./examples/calculator/index.html" style="width: 22rem; height: 22rem;">No frame support</iframe>

## This presentation

*Wow, that's meta.*

## Showing up in places we never expected

<div class="fragment">
<h3>Outside of the browser</h3>

<img alt="Node.js" src="images/nodejs-logo.svg" style="max-height: 16rem; padding: 2rem;" />
<p><a href="https://nodejs.org">https://nodejs.org</a></p>
</div>

## Internet of Things (IoT)

<div style="float: left; width: 20rem;">
<img src="images/arduino-led.gif" alt="Arduino" />
</div>

<div class="fragment">
	<div style="float: right; width: 20rem;">
		<img src="images/johnny-five.png" alt="Johnny-Five" />
	</div>
	<div style="clear: right; float: right;">
		<h3>Like Johnny-Five!</h3>
		<p><a href="http://johnny-five.io" target="_blank">http://johnny-five.io</a></p>
	</div>
</div>

# This is JavaScript

```js
$(function() {
	$(".notVisited").click(function(event) {
		$(event.target).removeClass("notVisited");
		$(event.target).addClass("path");
	})
});
```
<style type="text/css">
.reveal h1, .reveal h2,
.reveal h3, .reveal h4,
.reveal h5, .reveal h6 {
	text-transform: none;
}

img#logo {
	border: 0px;
	background-color: transparent;
	box-shadow: unset;
	margin-top: 2rem;
}
</style>