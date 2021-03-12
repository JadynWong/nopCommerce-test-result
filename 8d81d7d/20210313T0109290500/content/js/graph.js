/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 298.0, "minX": 0.0, "maxY": 1545.0, "series": [{"data": [[0.0, 298.0], [0.1, 327.0], [0.2, 379.0], [0.3, 403.0], [0.4, 410.0], [0.5, 414.0], [0.6, 421.0], [0.7, 424.0], [0.8, 428.0], [0.9, 429.0], [1.0, 431.0], [1.1, 432.0], [1.2, 434.0], [1.3, 436.0], [1.4, 438.0], [1.5, 439.0], [1.6, 440.0], [1.7, 441.0], [1.8, 442.0], [1.9, 444.0], [2.0, 444.0], [2.1, 445.0], [2.2, 445.0], [2.3, 445.0], [2.4, 446.0], [2.5, 447.0], [2.6, 448.0], [2.7, 448.0], [2.8, 449.0], [2.9, 449.0], [3.0, 450.0], [3.1, 451.0], [3.2, 451.0], [3.3, 452.0], [3.4, 452.0], [3.5, 452.0], [3.6, 453.0], [3.7, 453.0], [3.8, 454.0], [3.9, 454.0], [4.0, 454.0], [4.1, 455.0], [4.2, 455.0], [4.3, 456.0], [4.4, 457.0], [4.5, 457.0], [4.6, 458.0], [4.7, 458.0], [4.8, 459.0], [4.9, 459.0], [5.0, 460.0], [5.1, 460.0], [5.2, 460.0], [5.3, 461.0], [5.4, 461.0], [5.5, 461.0], [5.6, 462.0], [5.7, 462.0], [5.8, 462.0], [5.9, 463.0], [6.0, 463.0], [6.1, 464.0], [6.2, 464.0], [6.3, 464.0], [6.4, 464.0], [6.5, 465.0], [6.6, 465.0], [6.7, 465.0], [6.8, 465.0], [6.9, 466.0], [7.0, 466.0], [7.1, 466.0], [7.2, 467.0], [7.3, 467.0], [7.4, 467.0], [7.5, 467.0], [7.6, 467.0], [7.7, 468.0], [7.8, 468.0], [7.9, 468.0], [8.0, 468.0], [8.1, 469.0], [8.2, 469.0], [8.3, 470.0], [8.4, 470.0], [8.5, 470.0], [8.6, 470.0], [8.7, 470.0], [8.8, 470.0], [8.9, 471.0], [9.0, 471.0], [9.1, 471.0], [9.2, 471.0], [9.3, 472.0], [9.4, 472.0], [9.5, 472.0], [9.6, 472.0], [9.7, 472.0], [9.8, 473.0], [9.9, 473.0], [10.0, 473.0], [10.1, 473.0], [10.2, 473.0], [10.3, 474.0], [10.4, 474.0], [10.5, 474.0], [10.6, 474.0], [10.7, 474.0], [10.8, 475.0], [10.9, 475.0], [11.0, 475.0], [11.1, 475.0], [11.2, 476.0], [11.3, 476.0], [11.4, 476.0], [11.5, 476.0], [11.6, 476.0], [11.7, 477.0], [11.8, 477.0], [11.9, 477.0], [12.0, 477.0], [12.1, 477.0], [12.2, 478.0], [12.3, 478.0], [12.4, 478.0], [12.5, 478.0], [12.6, 479.0], [12.7, 479.0], [12.8, 479.0], [12.9, 479.0], [13.0, 480.0], [13.1, 480.0], [13.2, 480.0], [13.3, 481.0], [13.4, 481.0], [13.5, 481.0], [13.6, 481.0], [13.7, 482.0], [13.8, 482.0], [13.9, 482.0], [14.0, 482.0], [14.1, 482.0], [14.2, 483.0], [14.3, 483.0], [14.4, 483.0], [14.5, 483.0], [14.6, 483.0], [14.7, 483.0], [14.8, 484.0], [14.9, 484.0], [15.0, 484.0], [15.1, 484.0], [15.2, 484.0], [15.3, 485.0], [15.4, 485.0], [15.5, 485.0], [15.6, 485.0], [15.7, 485.0], [15.8, 485.0], [15.9, 485.0], [16.0, 486.0], [16.1, 486.0], [16.2, 486.0], [16.3, 486.0], [16.4, 486.0], [16.5, 487.0], [16.6, 487.0], [16.7, 487.0], [16.8, 487.0], [16.9, 487.0], [17.0, 488.0], [17.1, 488.0], [17.2, 488.0], [17.3, 488.0], [17.4, 488.0], [17.5, 488.0], [17.6, 488.0], [17.7, 489.0], [17.8, 489.0], [17.9, 489.0], [18.0, 489.0], [18.1, 489.0], [18.2, 489.0], [18.3, 490.0], [18.4, 490.0], [18.5, 490.0], [18.6, 490.0], [18.7, 490.0], [18.8, 490.0], [18.9, 490.0], [19.0, 491.0], [19.1, 491.0], [19.2, 491.0], [19.3, 491.0], [19.4, 491.0], [19.5, 491.0], [19.6, 492.0], [19.7, 492.0], [19.8, 492.0], [19.9, 492.0], [20.0, 492.0], [20.1, 492.0], [20.2, 492.0], [20.3, 492.0], [20.4, 493.0], [20.5, 493.0], [20.6, 493.0], [20.7, 493.0], [20.8, 493.0], [20.9, 494.0], [21.0, 494.0], [21.1, 494.0], [21.2, 494.0], [21.3, 494.0], [21.4, 494.0], [21.5, 494.0], [21.6, 495.0], [21.7, 495.0], [21.8, 495.0], [21.9, 495.0], [22.0, 495.0], [22.1, 495.0], [22.2, 495.0], [22.3, 495.0], [22.4, 496.0], [22.5, 496.0], [22.6, 496.0], [22.7, 496.0], [22.8, 496.0], [22.9, 496.0], [23.0, 496.0], [23.1, 497.0], [23.2, 497.0], [23.3, 497.0], [23.4, 497.0], [23.5, 497.0], [23.6, 497.0], [23.7, 498.0], [23.8, 498.0], [23.9, 498.0], [24.0, 498.0], [24.1, 498.0], [24.2, 499.0], [24.3, 499.0], [24.4, 499.0], [24.5, 499.0], [24.6, 499.0], [24.7, 499.0], [24.8, 500.0], [24.9, 500.0], [25.0, 500.0], [25.1, 500.0], [25.2, 500.0], [25.3, 500.0], [25.4, 500.0], [25.5, 501.0], [25.6, 501.0], [25.7, 501.0], [25.8, 501.0], [25.9, 501.0], [26.0, 502.0], [26.1, 502.0], [26.2, 502.0], [26.3, 502.0], [26.4, 502.0], [26.5, 503.0], [26.6, 503.0], [26.7, 503.0], [26.8, 503.0], [26.9, 503.0], [27.0, 503.0], [27.1, 503.0], [27.2, 504.0], [27.3, 504.0], [27.4, 504.0], [27.5, 504.0], [27.6, 504.0], [27.7, 504.0], [27.8, 504.0], [27.9, 505.0], [28.0, 505.0], [28.1, 505.0], [28.2, 505.0], [28.3, 505.0], [28.4, 506.0], [28.5, 506.0], [28.6, 506.0], [28.7, 506.0], [28.8, 506.0], [28.9, 506.0], [29.0, 506.0], [29.1, 507.0], [29.2, 507.0], [29.3, 507.0], [29.4, 507.0], [29.5, 507.0], [29.6, 507.0], [29.7, 507.0], [29.8, 508.0], [29.9, 508.0], [30.0, 508.0], [30.1, 508.0], [30.2, 508.0], [30.3, 508.0], [30.4, 509.0], [30.5, 509.0], [30.6, 509.0], [30.7, 509.0], [30.8, 509.0], [30.9, 509.0], [31.0, 510.0], [31.1, 510.0], [31.2, 510.0], [31.3, 510.0], [31.4, 510.0], [31.5, 510.0], [31.6, 511.0], [31.7, 511.0], [31.8, 511.0], [31.9, 511.0], [32.0, 511.0], [32.1, 511.0], [32.2, 512.0], [32.3, 512.0], [32.4, 512.0], [32.5, 512.0], [32.6, 513.0], [32.7, 513.0], [32.8, 513.0], [32.9, 513.0], [33.0, 513.0], [33.1, 513.0], [33.2, 513.0], [33.3, 513.0], [33.4, 513.0], [33.5, 514.0], [33.6, 514.0], [33.7, 514.0], [33.8, 514.0], [33.9, 514.0], [34.0, 514.0], [34.1, 514.0], [34.2, 515.0], [34.3, 515.0], [34.4, 515.0], [34.5, 515.0], [34.6, 515.0], [34.7, 515.0], [34.8, 515.0], [34.9, 516.0], [35.0, 516.0], [35.1, 516.0], [35.2, 516.0], [35.3, 516.0], [35.4, 517.0], [35.5, 517.0], [35.6, 517.0], [35.7, 517.0], [35.8, 517.0], [35.9, 517.0], [36.0, 518.0], [36.1, 518.0], [36.2, 518.0], [36.3, 518.0], [36.4, 518.0], [36.5, 518.0], [36.6, 519.0], [36.7, 519.0], [36.8, 519.0], [36.9, 519.0], [37.0, 519.0], [37.1, 520.0], [37.2, 520.0], [37.3, 520.0], [37.4, 520.0], [37.5, 521.0], [37.6, 521.0], [37.7, 521.0], [37.8, 521.0], [37.9, 521.0], [38.0, 521.0], [38.1, 522.0], [38.2, 522.0], [38.3, 522.0], [38.4, 522.0], [38.5, 522.0], [38.6, 522.0], [38.7, 522.0], [38.8, 523.0], [38.9, 523.0], [39.0, 523.0], [39.1, 523.0], [39.2, 523.0], [39.3, 523.0], [39.4, 523.0], [39.5, 523.0], [39.6, 524.0], [39.7, 524.0], [39.8, 524.0], [39.9, 524.0], [40.0, 524.0], [40.1, 525.0], [40.2, 525.0], [40.3, 525.0], [40.4, 525.0], [40.5, 525.0], [40.6, 525.0], [40.7, 525.0], [40.8, 526.0], [40.9, 526.0], [41.0, 526.0], [41.1, 526.0], [41.2, 526.0], [41.3, 526.0], [41.4, 526.0], [41.5, 527.0], [41.6, 527.0], [41.7, 527.0], [41.8, 527.0], [41.9, 527.0], [42.0, 528.0], [42.1, 528.0], [42.2, 528.0], [42.3, 528.0], [42.4, 528.0], [42.5, 528.0], [42.6, 528.0], [42.7, 529.0], [42.8, 529.0], [42.9, 529.0], [43.0, 529.0], [43.1, 529.0], [43.2, 529.0], [43.3, 530.0], [43.4, 530.0], [43.5, 530.0], [43.6, 530.0], [43.7, 530.0], [43.8, 530.0], [43.9, 530.0], [44.0, 530.0], [44.1, 531.0], [44.2, 531.0], [44.3, 531.0], [44.4, 531.0], [44.5, 531.0], [44.6, 532.0], [44.7, 532.0], [44.8, 532.0], [44.9, 532.0], [45.0, 532.0], [45.1, 532.0], [45.2, 532.0], [45.3, 532.0], [45.4, 532.0], [45.5, 533.0], [45.6, 533.0], [45.7, 533.0], [45.8, 533.0], [45.9, 533.0], [46.0, 533.0], [46.1, 534.0], [46.2, 534.0], [46.3, 534.0], [46.4, 534.0], [46.5, 534.0], [46.6, 534.0], [46.7, 535.0], [46.8, 535.0], [46.9, 535.0], [47.0, 535.0], [47.1, 535.0], [47.2, 535.0], [47.3, 536.0], [47.4, 536.0], [47.5, 536.0], [47.6, 536.0], [47.7, 536.0], [47.8, 537.0], [47.9, 537.0], [48.0, 537.0], [48.1, 537.0], [48.2, 537.0], [48.3, 537.0], [48.4, 538.0], [48.5, 538.0], [48.6, 538.0], [48.7, 538.0], [48.8, 538.0], [48.9, 539.0], [49.0, 539.0], [49.1, 539.0], [49.2, 539.0], [49.3, 539.0], [49.4, 539.0], [49.5, 540.0], [49.6, 540.0], [49.7, 540.0], [49.8, 540.0], [49.9, 540.0], [50.0, 540.0], [50.1, 540.0], [50.2, 540.0], [50.3, 540.0], [50.4, 541.0], [50.5, 541.0], [50.6, 541.0], [50.7, 541.0], [50.8, 542.0], [50.9, 542.0], [51.0, 542.0], [51.1, 542.0], [51.2, 542.0], [51.3, 542.0], [51.4, 543.0], [51.5, 543.0], [51.6, 543.0], [51.7, 543.0], [51.8, 543.0], [51.9, 544.0], [52.0, 544.0], [52.1, 544.0], [52.2, 544.0], [52.3, 544.0], [52.4, 545.0], [52.5, 545.0], [52.6, 545.0], [52.7, 545.0], [52.8, 545.0], [52.9, 545.0], [53.0, 546.0], [53.1, 546.0], [53.2, 546.0], [53.3, 546.0], [53.4, 546.0], [53.5, 546.0], [53.6, 546.0], [53.7, 546.0], [53.8, 547.0], [53.9, 547.0], [54.0, 547.0], [54.1, 547.0], [54.2, 547.0], [54.3, 547.0], [54.4, 548.0], [54.5, 548.0], [54.6, 548.0], [54.7, 548.0], [54.8, 548.0], [54.9, 549.0], [55.0, 549.0], [55.1, 549.0], [55.2, 549.0], [55.3, 549.0], [55.4, 549.0], [55.5, 550.0], [55.6, 550.0], [55.7, 550.0], [55.8, 550.0], [55.9, 551.0], [56.0, 551.0], [56.1, 551.0], [56.2, 551.0], [56.3, 551.0], [56.4, 551.0], [56.5, 552.0], [56.6, 552.0], [56.7, 552.0], [56.8, 552.0], [56.9, 552.0], [57.0, 553.0], [57.1, 553.0], [57.2, 553.0], [57.3, 554.0], [57.4, 554.0], [57.5, 554.0], [57.6, 555.0], [57.7, 555.0], [57.8, 555.0], [57.9, 555.0], [58.0, 555.0], [58.1, 555.0], [58.2, 556.0], [58.3, 556.0], [58.4, 556.0], [58.5, 556.0], [58.6, 557.0], [58.7, 557.0], [58.8, 557.0], [58.9, 557.0], [59.0, 558.0], [59.1, 558.0], [59.2, 558.0], [59.3, 558.0], [59.4, 558.0], [59.5, 558.0], [59.6, 558.0], [59.7, 559.0], [59.8, 559.0], [59.9, 559.0], [60.0, 559.0], [60.1, 560.0], [60.2, 560.0], [60.3, 560.0], [60.4, 560.0], [60.5, 560.0], [60.6, 560.0], [60.7, 561.0], [60.8, 561.0], [60.9, 561.0], [61.0, 561.0], [61.1, 561.0], [61.2, 561.0], [61.3, 562.0], [61.4, 562.0], [61.5, 562.0], [61.6, 562.0], [61.7, 562.0], [61.8, 563.0], [61.9, 563.0], [62.0, 563.0], [62.1, 563.0], [62.2, 564.0], [62.3, 564.0], [62.4, 564.0], [62.5, 565.0], [62.6, 565.0], [62.7, 565.0], [62.8, 565.0], [62.9, 565.0], [63.0, 565.0], [63.1, 566.0], [63.2, 566.0], [63.3, 566.0], [63.4, 567.0], [63.5, 567.0], [63.6, 567.0], [63.7, 567.0], [63.8, 567.0], [63.9, 567.0], [64.0, 568.0], [64.1, 568.0], [64.2, 568.0], [64.3, 568.0], [64.4, 569.0], [64.5, 569.0], [64.6, 569.0], [64.7, 569.0], [64.8, 569.0], [64.9, 570.0], [65.0, 570.0], [65.1, 570.0], [65.2, 570.0], [65.3, 571.0], [65.4, 571.0], [65.5, 571.0], [65.6, 571.0], [65.7, 571.0], [65.8, 572.0], [65.9, 572.0], [66.0, 572.0], [66.1, 573.0], [66.2, 573.0], [66.3, 573.0], [66.4, 573.0], [66.5, 573.0], [66.6, 574.0], [66.7, 574.0], [66.8, 574.0], [66.9, 574.0], [67.0, 575.0], [67.1, 575.0], [67.2, 575.0], [67.3, 576.0], [67.4, 576.0], [67.5, 576.0], [67.6, 576.0], [67.7, 576.0], [67.8, 577.0], [67.9, 577.0], [68.0, 577.0], [68.1, 577.0], [68.2, 577.0], [68.3, 578.0], [68.4, 578.0], [68.5, 578.0], [68.6, 578.0], [68.7, 579.0], [68.8, 579.0], [68.9, 579.0], [69.0, 579.0], [69.1, 580.0], [69.2, 580.0], [69.3, 580.0], [69.4, 581.0], [69.5, 581.0], [69.6, 581.0], [69.7, 582.0], [69.8, 582.0], [69.9, 583.0], [70.0, 583.0], [70.1, 583.0], [70.2, 583.0], [70.3, 583.0], [70.4, 584.0], [70.5, 584.0], [70.6, 584.0], [70.7, 585.0], [70.8, 585.0], [70.9, 585.0], [71.0, 585.0], [71.1, 586.0], [71.2, 586.0], [71.3, 586.0], [71.4, 586.0], [71.5, 586.0], [71.6, 586.0], [71.7, 587.0], [71.8, 587.0], [71.9, 587.0], [72.0, 588.0], [72.1, 588.0], [72.2, 588.0], [72.3, 589.0], [72.4, 589.0], [72.5, 589.0], [72.6, 590.0], [72.7, 590.0], [72.8, 590.0], [72.9, 590.0], [73.0, 591.0], [73.1, 591.0], [73.2, 591.0], [73.3, 591.0], [73.4, 591.0], [73.5, 592.0], [73.6, 592.0], [73.7, 592.0], [73.8, 592.0], [73.9, 593.0], [74.0, 593.0], [74.1, 593.0], [74.2, 593.0], [74.3, 594.0], [74.4, 594.0], [74.5, 594.0], [74.6, 594.0], [74.7, 595.0], [74.8, 595.0], [74.9, 595.0], [75.0, 595.0], [75.1, 596.0], [75.2, 596.0], [75.3, 596.0], [75.4, 596.0], [75.5, 597.0], [75.6, 597.0], [75.7, 597.0], [75.8, 598.0], [75.9, 598.0], [76.0, 598.0], [76.1, 598.0], [76.2, 598.0], [76.3, 598.0], [76.4, 599.0], [76.5, 599.0], [76.6, 600.0], [76.7, 600.0], [76.8, 600.0], [76.9, 601.0], [77.0, 601.0], [77.1, 601.0], [77.2, 601.0], [77.3, 602.0], [77.4, 602.0], [77.5, 602.0], [77.6, 602.0], [77.7, 602.0], [77.8, 603.0], [77.9, 603.0], [78.0, 603.0], [78.1, 603.0], [78.2, 604.0], [78.3, 604.0], [78.4, 604.0], [78.5, 604.0], [78.6, 605.0], [78.7, 605.0], [78.8, 605.0], [78.9, 605.0], [79.0, 605.0], [79.1, 605.0], [79.2, 606.0], [79.3, 606.0], [79.4, 606.0], [79.5, 607.0], [79.6, 607.0], [79.7, 607.0], [79.8, 608.0], [79.9, 608.0], [80.0, 608.0], [80.1, 609.0], [80.2, 609.0], [80.3, 609.0], [80.4, 609.0], [80.5, 610.0], [80.6, 610.0], [80.7, 610.0], [80.8, 610.0], [80.9, 611.0], [81.0, 611.0], [81.1, 611.0], [81.2, 612.0], [81.3, 612.0], [81.4, 612.0], [81.5, 612.0], [81.6, 612.0], [81.7, 613.0], [81.8, 613.0], [81.9, 613.0], [82.0, 613.0], [82.1, 614.0], [82.2, 614.0], [82.3, 614.0], [82.4, 614.0], [82.5, 615.0], [82.6, 615.0], [82.7, 615.0], [82.8, 616.0], [82.9, 616.0], [83.0, 617.0], [83.1, 617.0], [83.2, 617.0], [83.3, 618.0], [83.4, 618.0], [83.5, 618.0], [83.6, 618.0], [83.7, 619.0], [83.8, 619.0], [83.9, 619.0], [84.0, 620.0], [84.1, 620.0], [84.2, 620.0], [84.3, 621.0], [84.4, 621.0], [84.5, 621.0], [84.6, 621.0], [84.7, 622.0], [84.8, 622.0], [84.9, 623.0], [85.0, 623.0], [85.1, 623.0], [85.2, 624.0], [85.3, 624.0], [85.4, 624.0], [85.5, 624.0], [85.6, 625.0], [85.7, 625.0], [85.8, 626.0], [85.9, 626.0], [86.0, 626.0], [86.1, 627.0], [86.2, 628.0], [86.3, 628.0], [86.4, 628.0], [86.5, 629.0], [86.6, 629.0], [86.7, 629.0], [86.8, 629.0], [86.9, 629.0], [87.0, 630.0], [87.1, 630.0], [87.2, 631.0], [87.3, 631.0], [87.4, 631.0], [87.5, 632.0], [87.6, 632.0], [87.7, 632.0], [87.8, 633.0], [87.9, 633.0], [88.0, 634.0], [88.1, 634.0], [88.2, 634.0], [88.3, 635.0], [88.4, 635.0], [88.5, 636.0], [88.6, 636.0], [88.7, 636.0], [88.8, 637.0], [88.9, 637.0], [89.0, 638.0], [89.1, 638.0], [89.2, 639.0], [89.3, 639.0], [89.4, 640.0], [89.5, 640.0], [89.6, 640.0], [89.7, 640.0], [89.8, 641.0], [89.9, 641.0], [90.0, 642.0], [90.1, 642.0], [90.2, 643.0], [90.3, 643.0], [90.4, 644.0], [90.5, 644.0], [90.6, 645.0], [90.7, 646.0], [90.8, 647.0], [90.9, 647.0], [91.0, 648.0], [91.1, 648.0], [91.2, 649.0], [91.3, 651.0], [91.4, 652.0], [91.5, 653.0], [91.6, 654.0], [91.7, 655.0], [91.8, 655.0], [91.9, 657.0], [92.0, 657.0], [92.1, 658.0], [92.2, 659.0], [92.3, 660.0], [92.4, 662.0], [92.5, 663.0], [92.6, 664.0], [92.7, 664.0], [92.8, 664.0], [92.9, 665.0], [93.0, 666.0], [93.1, 667.0], [93.2, 668.0], [93.3, 668.0], [93.4, 669.0], [93.5, 670.0], [93.6, 670.0], [93.7, 671.0], [93.8, 672.0], [93.9, 673.0], [94.0, 674.0], [94.1, 674.0], [94.2, 675.0], [94.3, 676.0], [94.4, 677.0], [94.5, 679.0], [94.6, 679.0], [94.7, 680.0], [94.8, 683.0], [94.9, 684.0], [95.0, 685.0], [95.1, 687.0], [95.2, 687.0], [95.3, 691.0], [95.4, 692.0], [95.5, 695.0], [95.6, 696.0], [95.7, 696.0], [95.8, 698.0], [95.9, 700.0], [96.0, 702.0], [96.1, 704.0], [96.2, 704.0], [96.3, 705.0], [96.4, 706.0], [96.5, 708.0], [96.6, 709.0], [96.7, 710.0], [96.8, 713.0], [96.9, 716.0], [97.0, 718.0], [97.1, 720.0], [97.2, 722.0], [97.3, 725.0], [97.4, 728.0], [97.5, 732.0], [97.6, 732.0], [97.7, 735.0], [97.8, 736.0], [97.9, 742.0], [98.0, 747.0], [98.1, 752.0], [98.2, 756.0], [98.3, 761.0], [98.4, 777.0], [98.5, 811.0], [98.6, 814.0], [98.7, 837.0], [98.8, 841.0], [98.9, 847.0], [99.0, 856.0], [99.1, 865.0], [99.2, 868.0], [99.3, 878.0], [99.4, 893.0], [99.5, 929.0], [99.6, 982.0], [99.7, 1055.0], [99.8, 1200.0], [99.9, 1308.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 2786.0, "series": [{"data": [[600.0, 1042.0], [700.0, 141.0], [800.0, 49.0], [200.0, 1.0], [900.0, 11.0], [1000.0, 7.0], [1100.0, 3.0], [1200.0, 5.0], [300.0, 14.0], [1300.0, 5.0], [1500.0, 1.0], [400.0, 1315.0], [500.0, 2786.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1500.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4008.0, "series": [{"data": [[0.0, 1371.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 4008.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 49.56912028725314, "minX": 1.61556894E12, "maxY": 50.0, "series": [{"data": [[1.615569E12, 49.56912028725314], [1.61556894E12, 50.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.615569E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 298.0, "minX": 2.0, "maxY": 556.0765334834, "series": [{"data": [[2.0, 323.5], [35.0, 488.0], [34.0, 468.0], [37.0, 472.0], [39.0, 485.0], [38.0, 479.0], [41.0, 461.5], [42.0, 460.0], [45.0, 467.3333333333333], [49.0, 462.0], [48.0, 478.0], [3.0, 327.0], [50.0, 556.0765334834], [4.0, 314.0], [5.0, 298.0], [6.0, 392.0], [7.0, 324.0], [9.0, 380.0], [10.0, 359.0], [11.0, 326.0], [12.0, 354.0], [13.0, 369.0], [14.0, 397.0], [15.0, 410.0], [17.0, 409.0], [18.0, 404.0], [19.0, 403.0], [20.0, 412.0], [22.0, 419.0], [23.0, 433.0], [27.0, 429.75], [28.0, 469.0], [31.0, 462.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[49.77695167286246, 554.8444237918225]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 5103.5, "minX": 1.61556894E12, "maxY": 990392.4166666666, "series": [{"data": [[1.615569E12, 990392.4166666666], [1.61556894E12, 922825.25]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.615569E12, 5477.166666666667], [1.61556894E12, 5103.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.615569E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 553.5969171483637, "minX": 1.61556894E12, "maxY": 556.0068222621198, "series": [{"data": [[1.615569E12, 556.0068222621198], [1.61556894E12, 553.5969171483637]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.615569E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 553.1017341040462, "minX": 1.61556894E12, "maxY": 555.5353680430884, "series": [{"data": [[1.615569E12, 555.5353680430884], [1.61556894E12, 553.1017341040462]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.615569E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.61556894E12, "maxY": 8.16069364161851, "series": [{"data": [[1.615569E12, 0.0], [1.61556894E12, 8.16069364161851]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.615569E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 298.0, "minX": 1.61556894E12, "maxY": 1545.0, "series": [{"data": [[1.615569E12, 1545.0], [1.61556894E12, 1375.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.615569E12, 648.0], [1.61556894E12, 636.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.615569E12, 851.0], [1.61556894E12, 924.1999999999998]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.615569E12, 696.0], [1.61556894E12, 676.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.615569E12, 298.0], [1.61556894E12, 411.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.615569E12, 540.0], [1.61556894E12, 540.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.615569E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 479.0, "minX": 48.0, "maxY": 935.0, "series": [{"data": [[48.0, 935.0], [66.0, 710.5], [69.0, 635.0], [74.0, 710.0], [76.0, 652.5], [77.0, 587.0], [78.0, 640.0], [81.0, 563.5], [82.0, 557.5], [84.0, 575.5], [85.0, 544.0], [86.0, 544.0], [89.0, 559.0], [88.0, 567.5], [91.0, 511.0], [90.0, 568.5], [94.0, 541.5], [95.0, 521.0], [93.0, 551.0], [92.0, 532.0], [97.0, 528.0], [99.0, 522.0], [96.0, 514.5], [98.0, 508.0], [102.0, 508.5], [100.0, 505.0], [101.0, 490.5], [103.0, 479.0], [104.0, 490.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 104.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 479.0, "minX": 48.0, "maxY": 933.0, "series": [{"data": [[48.0, 933.0], [66.0, 710.0], [69.0, 635.0], [74.0, 709.5], [76.0, 652.0], [77.0, 587.0], [78.0, 639.5], [81.0, 562.5], [82.0, 557.0], [84.0, 575.0], [85.0, 544.0], [86.0, 543.5], [89.0, 558.0], [88.0, 566.5], [91.0, 510.0], [90.0, 568.5], [94.0, 541.0], [95.0, 520.0], [93.0, 550.0], [92.0, 532.0], [97.0, 528.0], [99.0, 521.0], [96.0, 514.5], [98.0, 508.0], [102.0, 508.0], [100.0, 504.5], [101.0, 490.5], [103.0, 479.0], [104.0, 490.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 104.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 44.083333333333336, "minX": 1.61556894E12, "maxY": 45.583333333333336, "series": [{"data": [[1.615569E12, 45.583333333333336], [1.61556894E12, 44.083333333333336]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.615569E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 43.25, "minX": 1.61556894E12, "maxY": 46.416666666666664, "series": [{"data": [[1.615569E12, 46.416666666666664], [1.61556894E12, 43.25]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.615569E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 43.25, "minX": 1.61556894E12, "maxY": 46.416666666666664, "series": [{"data": [[1.615569E12, 46.416666666666664], [1.61556894E12, 43.25]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.615569E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 43.25, "minX": 1.61556894E12, "maxY": 46.416666666666664, "series": [{"data": [[1.615569E12, 46.416666666666664], [1.61556894E12, 43.25]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.615569E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

