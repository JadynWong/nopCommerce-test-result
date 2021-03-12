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
        data: {"result": {"minY": 350.0, "minX": 0.0, "maxY": 1397.0, "series": [{"data": [[0.0, 350.0], [0.1, 358.0], [0.2, 385.0], [0.3, 386.0], [0.4, 391.0], [0.5, 396.0], [0.6, 401.0], [0.7, 403.0], [0.8, 405.0], [0.9, 406.0], [1.0, 408.0], [1.1, 409.0], [1.2, 411.0], [1.3, 412.0], [1.4, 413.0], [1.5, 414.0], [1.6, 415.0], [1.7, 415.0], [1.8, 417.0], [1.9, 417.0], [2.0, 418.0], [2.1, 419.0], [2.2, 419.0], [2.3, 419.0], [2.4, 420.0], [2.5, 422.0], [2.6, 422.0], [2.7, 423.0], [2.8, 423.0], [2.9, 423.0], [3.0, 425.0], [3.1, 425.0], [3.2, 426.0], [3.3, 427.0], [3.4, 428.0], [3.5, 428.0], [3.6, 428.0], [3.7, 429.0], [3.8, 430.0], [3.9, 430.0], [4.0, 432.0], [4.1, 432.0], [4.2, 433.0], [4.3, 434.0], [4.4, 435.0], [4.5, 435.0], [4.6, 435.0], [4.7, 436.0], [4.8, 437.0], [4.9, 437.0], [5.0, 438.0], [5.1, 439.0], [5.2, 440.0], [5.3, 440.0], [5.4, 441.0], [5.5, 441.0], [5.6, 441.0], [5.7, 442.0], [5.8, 443.0], [5.9, 443.0], [6.0, 444.0], [6.1, 444.0], [6.2, 444.0], [6.3, 445.0], [6.4, 445.0], [6.5, 445.0], [6.6, 446.0], [6.7, 446.0], [6.8, 446.0], [6.9, 447.0], [7.0, 448.0], [7.1, 448.0], [7.2, 448.0], [7.3, 449.0], [7.4, 449.0], [7.5, 449.0], [7.6, 450.0], [7.7, 450.0], [7.8, 450.0], [7.9, 450.0], [8.0, 451.0], [8.1, 451.0], [8.2, 451.0], [8.3, 451.0], [8.4, 451.0], [8.5, 452.0], [8.6, 452.0], [8.7, 452.0], [8.8, 453.0], [8.9, 453.0], [9.0, 453.0], [9.1, 453.0], [9.2, 454.0], [9.3, 454.0], [9.4, 455.0], [9.5, 455.0], [9.6, 455.0], [9.7, 456.0], [9.8, 456.0], [9.9, 456.0], [10.0, 456.0], [10.1, 457.0], [10.2, 457.0], [10.3, 458.0], [10.4, 458.0], [10.5, 458.0], [10.6, 458.0], [10.7, 459.0], [10.8, 459.0], [10.9, 460.0], [11.0, 460.0], [11.1, 461.0], [11.2, 461.0], [11.3, 462.0], [11.4, 462.0], [11.5, 462.0], [11.6, 462.0], [11.7, 462.0], [11.8, 463.0], [11.9, 463.0], [12.0, 463.0], [12.1, 464.0], [12.2, 464.0], [12.3, 464.0], [12.4, 464.0], [12.5, 464.0], [12.6, 465.0], [12.7, 465.0], [12.8, 465.0], [12.9, 465.0], [13.0, 466.0], [13.1, 466.0], [13.2, 466.0], [13.3, 467.0], [13.4, 467.0], [13.5, 467.0], [13.6, 467.0], [13.7, 467.0], [13.8, 468.0], [13.9, 468.0], [14.0, 468.0], [14.1, 469.0], [14.2, 469.0], [14.3, 469.0], [14.4, 469.0], [14.5, 470.0], [14.6, 470.0], [14.7, 470.0], [14.8, 470.0], [14.9, 471.0], [15.0, 471.0], [15.1, 471.0], [15.2, 471.0], [15.3, 472.0], [15.4, 472.0], [15.5, 472.0], [15.6, 473.0], [15.7, 473.0], [15.8, 473.0], [15.9, 474.0], [16.0, 474.0], [16.1, 474.0], [16.2, 474.0], [16.3, 474.0], [16.4, 474.0], [16.5, 475.0], [16.6, 475.0], [16.7, 475.0], [16.8, 476.0], [16.9, 476.0], [17.0, 476.0], [17.1, 476.0], [17.2, 476.0], [17.3, 476.0], [17.4, 476.0], [17.5, 477.0], [17.6, 477.0], [17.7, 477.0], [17.8, 477.0], [17.9, 477.0], [18.0, 478.0], [18.1, 478.0], [18.2, 478.0], [18.3, 478.0], [18.4, 478.0], [18.5, 478.0], [18.6, 479.0], [18.7, 479.0], [18.8, 479.0], [18.9, 479.0], [19.0, 479.0], [19.1, 480.0], [19.2, 480.0], [19.3, 480.0], [19.4, 481.0], [19.5, 481.0], [19.6, 481.0], [19.7, 481.0], [19.8, 482.0], [19.9, 482.0], [20.0, 482.0], [20.1, 482.0], [20.2, 482.0], [20.3, 482.0], [20.4, 483.0], [20.5, 483.0], [20.6, 483.0], [20.7, 483.0], [20.8, 483.0], [20.9, 483.0], [21.0, 483.0], [21.1, 483.0], [21.2, 484.0], [21.3, 484.0], [21.4, 484.0], [21.5, 484.0], [21.6, 484.0], [21.7, 485.0], [21.8, 485.0], [21.9, 485.0], [22.0, 485.0], [22.1, 485.0], [22.2, 485.0], [22.3, 486.0], [22.4, 486.0], [22.5, 486.0], [22.6, 486.0], [22.7, 486.0], [22.8, 487.0], [22.9, 487.0], [23.0, 487.0], [23.1, 487.0], [23.2, 487.0], [23.3, 487.0], [23.4, 488.0], [23.5, 488.0], [23.6, 488.0], [23.7, 488.0], [23.8, 488.0], [23.9, 488.0], [24.0, 489.0], [24.1, 489.0], [24.2, 489.0], [24.3, 489.0], [24.4, 489.0], [24.5, 490.0], [24.6, 490.0], [24.7, 490.0], [24.8, 490.0], [24.9, 490.0], [25.0, 490.0], [25.1, 490.0], [25.2, 491.0], [25.3, 491.0], [25.4, 491.0], [25.5, 491.0], [25.6, 491.0], [25.7, 491.0], [25.8, 491.0], [25.9, 492.0], [26.0, 492.0], [26.1, 492.0], [26.2, 492.0], [26.3, 492.0], [26.4, 492.0], [26.5, 492.0], [26.6, 493.0], [26.7, 493.0], [26.8, 493.0], [26.9, 493.0], [27.0, 493.0], [27.1, 493.0], [27.2, 493.0], [27.3, 494.0], [27.4, 494.0], [27.5, 494.0], [27.6, 494.0], [27.7, 494.0], [27.8, 494.0], [27.9, 494.0], [28.0, 495.0], [28.1, 495.0], [28.2, 495.0], [28.3, 495.0], [28.4, 495.0], [28.5, 495.0], [28.6, 495.0], [28.7, 495.0], [28.8, 496.0], [28.9, 496.0], [29.0, 496.0], [29.1, 496.0], [29.2, 496.0], [29.3, 497.0], [29.4, 497.0], [29.5, 497.0], [29.6, 497.0], [29.7, 497.0], [29.8, 498.0], [29.9, 498.0], [30.0, 498.0], [30.1, 498.0], [30.2, 498.0], [30.3, 498.0], [30.4, 498.0], [30.5, 499.0], [30.6, 499.0], [30.7, 499.0], [30.8, 499.0], [30.9, 500.0], [31.0, 500.0], [31.1, 500.0], [31.2, 500.0], [31.3, 500.0], [31.4, 500.0], [31.5, 500.0], [31.6, 501.0], [31.7, 501.0], [31.8, 501.0], [31.9, 501.0], [32.0, 501.0], [32.1, 501.0], [32.2, 501.0], [32.3, 502.0], [32.4, 502.0], [32.5, 502.0], [32.6, 502.0], [32.7, 502.0], [32.8, 502.0], [32.9, 503.0], [33.0, 503.0], [33.1, 503.0], [33.2, 503.0], [33.3, 503.0], [33.4, 504.0], [33.5, 504.0], [33.6, 504.0], [33.7, 504.0], [33.8, 504.0], [33.9, 504.0], [34.0, 504.0], [34.1, 505.0], [34.2, 505.0], [34.3, 505.0], [34.4, 505.0], [34.5, 505.0], [34.6, 506.0], [34.7, 506.0], [34.8, 506.0], [34.9, 506.0], [35.0, 506.0], [35.1, 506.0], [35.2, 507.0], [35.3, 507.0], [35.4, 507.0], [35.5, 507.0], [35.6, 507.0], [35.7, 508.0], [35.8, 508.0], [35.9, 508.0], [36.0, 508.0], [36.1, 508.0], [36.2, 508.0], [36.3, 509.0], [36.4, 509.0], [36.5, 509.0], [36.6, 509.0], [36.7, 509.0], [36.8, 509.0], [36.9, 509.0], [37.0, 510.0], [37.1, 510.0], [37.2, 510.0], [37.3, 510.0], [37.4, 510.0], [37.5, 510.0], [37.6, 510.0], [37.7, 511.0], [37.8, 511.0], [37.9, 511.0], [38.0, 511.0], [38.1, 511.0], [38.2, 511.0], [38.3, 512.0], [38.4, 512.0], [38.5, 512.0], [38.6, 512.0], [38.7, 512.0], [38.8, 512.0], [38.9, 512.0], [39.0, 512.0], [39.1, 513.0], [39.2, 513.0], [39.3, 513.0], [39.4, 513.0], [39.5, 513.0], [39.6, 514.0], [39.7, 514.0], [39.8, 514.0], [39.9, 514.0], [40.0, 514.0], [40.1, 515.0], [40.2, 515.0], [40.3, 515.0], [40.4, 515.0], [40.5, 515.0], [40.6, 515.0], [40.7, 515.0], [40.8, 516.0], [40.9, 516.0], [41.0, 516.0], [41.1, 516.0], [41.2, 516.0], [41.3, 516.0], [41.4, 516.0], [41.5, 516.0], [41.6, 517.0], [41.7, 517.0], [41.8, 517.0], [41.9, 517.0], [42.0, 517.0], [42.1, 517.0], [42.2, 517.0], [42.3, 518.0], [42.4, 518.0], [42.5, 518.0], [42.6, 518.0], [42.7, 518.0], [42.8, 519.0], [42.9, 519.0], [43.0, 519.0], [43.1, 519.0], [43.2, 519.0], [43.3, 519.0], [43.4, 519.0], [43.5, 520.0], [43.6, 520.0], [43.7, 520.0], [43.8, 520.0], [43.9, 520.0], [44.0, 520.0], [44.1, 520.0], [44.2, 520.0], [44.3, 521.0], [44.4, 521.0], [44.5, 521.0], [44.6, 521.0], [44.7, 521.0], [44.8, 521.0], [44.9, 522.0], [45.0, 522.0], [45.1, 522.0], [45.2, 522.0], [45.3, 522.0], [45.4, 522.0], [45.5, 523.0], [45.6, 523.0], [45.7, 523.0], [45.8, 523.0], [45.9, 523.0], [46.0, 524.0], [46.1, 524.0], [46.2, 524.0], [46.3, 524.0], [46.4, 524.0], [46.5, 524.0], [46.6, 525.0], [46.7, 525.0], [46.8, 525.0], [46.9, 525.0], [47.0, 525.0], [47.1, 526.0], [47.2, 526.0], [47.3, 526.0], [47.4, 526.0], [47.5, 526.0], [47.6, 526.0], [47.7, 527.0], [47.8, 527.0], [47.9, 527.0], [48.0, 527.0], [48.1, 527.0], [48.2, 527.0], [48.3, 528.0], [48.4, 528.0], [48.5, 528.0], [48.6, 528.0], [48.7, 528.0], [48.8, 528.0], [48.9, 528.0], [49.0, 529.0], [49.1, 529.0], [49.2, 529.0], [49.3, 529.0], [49.4, 529.0], [49.5, 530.0], [49.6, 530.0], [49.7, 530.0], [49.8, 530.0], [49.9, 530.0], [50.0, 531.0], [50.1, 531.0], [50.2, 531.0], [50.3, 531.0], [50.4, 531.0], [50.5, 531.0], [50.6, 532.0], [50.7, 532.0], [50.8, 532.0], [50.9, 532.0], [51.0, 533.0], [51.1, 533.0], [51.2, 533.0], [51.3, 533.0], [51.4, 533.0], [51.5, 533.0], [51.6, 533.0], [51.7, 533.0], [51.8, 534.0], [51.9, 534.0], [52.0, 534.0], [52.1, 534.0], [52.2, 534.0], [52.3, 534.0], [52.4, 534.0], [52.5, 535.0], [52.6, 535.0], [52.7, 535.0], [52.8, 535.0], [52.9, 535.0], [53.0, 535.0], [53.1, 536.0], [53.2, 536.0], [53.3, 536.0], [53.4, 536.0], [53.5, 537.0], [53.6, 537.0], [53.7, 537.0], [53.8, 537.0], [53.9, 537.0], [54.0, 537.0], [54.1, 538.0], [54.2, 538.0], [54.3, 538.0], [54.4, 538.0], [54.5, 539.0], [54.6, 539.0], [54.7, 539.0], [54.8, 539.0], [54.9, 539.0], [55.0, 539.0], [55.1, 539.0], [55.2, 540.0], [55.3, 540.0], [55.4, 540.0], [55.5, 540.0], [55.6, 540.0], [55.7, 540.0], [55.8, 540.0], [55.9, 541.0], [56.0, 541.0], [56.1, 541.0], [56.2, 541.0], [56.3, 541.0], [56.4, 542.0], [56.5, 542.0], [56.6, 542.0], [56.7, 542.0], [56.8, 542.0], [56.9, 542.0], [57.0, 542.0], [57.1, 542.0], [57.2, 542.0], [57.3, 543.0], [57.4, 543.0], [57.5, 543.0], [57.6, 543.0], [57.7, 543.0], [57.8, 543.0], [57.9, 544.0], [58.0, 544.0], [58.1, 544.0], [58.2, 544.0], [58.3, 544.0], [58.4, 544.0], [58.5, 544.0], [58.6, 545.0], [58.7, 545.0], [58.8, 545.0], [58.9, 545.0], [59.0, 545.0], [59.1, 545.0], [59.2, 546.0], [59.3, 546.0], [59.4, 546.0], [59.5, 546.0], [59.6, 546.0], [59.7, 546.0], [59.8, 547.0], [59.9, 547.0], [60.0, 547.0], [60.1, 547.0], [60.2, 547.0], [60.3, 547.0], [60.4, 547.0], [60.5, 548.0], [60.6, 548.0], [60.7, 548.0], [60.8, 548.0], [60.9, 548.0], [61.0, 548.0], [61.1, 548.0], [61.2, 549.0], [61.3, 549.0], [61.4, 549.0], [61.5, 549.0], [61.6, 549.0], [61.7, 550.0], [61.8, 550.0], [61.9, 550.0], [62.0, 550.0], [62.1, 550.0], [62.2, 550.0], [62.3, 551.0], [62.4, 551.0], [62.5, 551.0], [62.6, 551.0], [62.7, 551.0], [62.8, 552.0], [62.9, 552.0], [63.0, 552.0], [63.1, 552.0], [63.2, 552.0], [63.3, 552.0], [63.4, 552.0], [63.5, 553.0], [63.6, 553.0], [63.7, 553.0], [63.8, 553.0], [63.9, 553.0], [64.0, 554.0], [64.1, 554.0], [64.2, 554.0], [64.3, 554.0], [64.4, 554.0], [64.5, 554.0], [64.6, 554.0], [64.7, 554.0], [64.8, 555.0], [64.9, 555.0], [65.0, 555.0], [65.1, 555.0], [65.2, 555.0], [65.3, 555.0], [65.4, 556.0], [65.5, 556.0], [65.6, 556.0], [65.7, 556.0], [65.8, 556.0], [65.9, 556.0], [66.0, 557.0], [66.1, 557.0], [66.2, 557.0], [66.3, 557.0], [66.4, 557.0], [66.5, 558.0], [66.6, 558.0], [66.7, 558.0], [66.8, 558.0], [66.9, 559.0], [67.0, 559.0], [67.1, 559.0], [67.2, 559.0], [67.3, 559.0], [67.4, 559.0], [67.5, 560.0], [67.6, 560.0], [67.7, 560.0], [67.8, 560.0], [67.9, 560.0], [68.0, 560.0], [68.1, 560.0], [68.2, 561.0], [68.3, 561.0], [68.4, 561.0], [68.5, 561.0], [68.6, 561.0], [68.7, 562.0], [68.8, 562.0], [68.9, 562.0], [69.0, 562.0], [69.1, 563.0], [69.2, 563.0], [69.3, 563.0], [69.4, 563.0], [69.5, 563.0], [69.6, 563.0], [69.7, 564.0], [69.8, 564.0], [69.9, 564.0], [70.0, 564.0], [70.1, 565.0], [70.2, 565.0], [70.3, 565.0], [70.4, 565.0], [70.5, 565.0], [70.6, 566.0], [70.7, 566.0], [70.8, 566.0], [70.9, 566.0], [71.0, 566.0], [71.1, 566.0], [71.2, 567.0], [71.3, 567.0], [71.4, 567.0], [71.5, 567.0], [71.6, 568.0], [71.7, 568.0], [71.8, 568.0], [71.9, 569.0], [72.0, 569.0], [72.1, 569.0], [72.2, 569.0], [72.3, 569.0], [72.4, 570.0], [72.5, 570.0], [72.6, 570.0], [72.7, 570.0], [72.8, 570.0], [72.9, 571.0], [73.0, 571.0], [73.1, 571.0], [73.2, 571.0], [73.3, 571.0], [73.4, 571.0], [73.5, 572.0], [73.6, 572.0], [73.7, 572.0], [73.8, 572.0], [73.9, 573.0], [74.0, 573.0], [74.1, 573.0], [74.2, 573.0], [74.3, 573.0], [74.4, 573.0], [74.5, 574.0], [74.6, 574.0], [74.7, 574.0], [74.8, 575.0], [74.9, 575.0], [75.0, 575.0], [75.1, 575.0], [75.2, 575.0], [75.3, 576.0], [75.4, 576.0], [75.5, 576.0], [75.6, 577.0], [75.7, 577.0], [75.8, 577.0], [75.9, 577.0], [76.0, 577.0], [76.1, 578.0], [76.2, 578.0], [76.3, 578.0], [76.4, 579.0], [76.5, 579.0], [76.6, 579.0], [76.7, 579.0], [76.8, 580.0], [76.9, 580.0], [77.0, 580.0], [77.1, 581.0], [77.2, 581.0], [77.3, 581.0], [77.4, 581.0], [77.5, 581.0], [77.6, 582.0], [77.7, 582.0], [77.8, 582.0], [77.9, 583.0], [78.0, 583.0], [78.1, 583.0], [78.2, 584.0], [78.3, 584.0], [78.4, 584.0], [78.5, 584.0], [78.6, 585.0], [78.7, 585.0], [78.8, 585.0], [78.9, 585.0], [79.0, 586.0], [79.1, 586.0], [79.2, 586.0], [79.3, 587.0], [79.4, 587.0], [79.5, 587.0], [79.6, 587.0], [79.7, 588.0], [79.8, 588.0], [79.9, 588.0], [80.0, 589.0], [80.1, 589.0], [80.2, 589.0], [80.3, 590.0], [80.4, 590.0], [80.5, 590.0], [80.6, 591.0], [80.7, 591.0], [80.8, 591.0], [80.9, 592.0], [81.0, 592.0], [81.1, 592.0], [81.2, 592.0], [81.3, 593.0], [81.4, 593.0], [81.5, 593.0], [81.6, 594.0], [81.7, 594.0], [81.8, 594.0], [81.9, 595.0], [82.0, 595.0], [82.1, 595.0], [82.2, 595.0], [82.3, 595.0], [82.4, 596.0], [82.5, 596.0], [82.6, 597.0], [82.7, 597.0], [82.8, 597.0], [82.9, 597.0], [83.0, 598.0], [83.1, 598.0], [83.2, 598.0], [83.3, 598.0], [83.4, 598.0], [83.5, 599.0], [83.6, 599.0], [83.7, 600.0], [83.8, 600.0], [83.9, 600.0], [84.0, 600.0], [84.1, 600.0], [84.2, 601.0], [84.3, 601.0], [84.4, 602.0], [84.5, 602.0], [84.6, 602.0], [84.7, 603.0], [84.8, 603.0], [84.9, 603.0], [85.0, 603.0], [85.1, 604.0], [85.2, 604.0], [85.3, 605.0], [85.4, 605.0], [85.5, 605.0], [85.6, 605.0], [85.7, 606.0], [85.8, 606.0], [85.9, 607.0], [86.0, 607.0], [86.1, 607.0], [86.2, 608.0], [86.3, 608.0], [86.4, 608.0], [86.5, 608.0], [86.6, 609.0], [86.7, 609.0], [86.8, 609.0], [86.9, 610.0], [87.0, 610.0], [87.1, 610.0], [87.2, 611.0], [87.3, 612.0], [87.4, 612.0], [87.5, 613.0], [87.6, 613.0], [87.7, 613.0], [87.8, 614.0], [87.9, 614.0], [88.0, 614.0], [88.1, 615.0], [88.2, 615.0], [88.3, 616.0], [88.4, 616.0], [88.5, 617.0], [88.6, 617.0], [88.7, 618.0], [88.8, 619.0], [88.9, 619.0], [89.0, 620.0], [89.1, 620.0], [89.2, 620.0], [89.3, 621.0], [89.4, 621.0], [89.5, 622.0], [89.6, 622.0], [89.7, 622.0], [89.8, 623.0], [89.9, 623.0], [90.0, 624.0], [90.1, 624.0], [90.2, 625.0], [90.3, 625.0], [90.4, 626.0], [90.5, 627.0], [90.6, 628.0], [90.7, 628.0], [90.8, 629.0], [90.9, 630.0], [91.0, 630.0], [91.1, 630.0], [91.2, 631.0], [91.3, 631.0], [91.4, 631.0], [91.5, 632.0], [91.6, 632.0], [91.7, 633.0], [91.8, 633.0], [91.9, 634.0], [92.0, 635.0], [92.1, 635.0], [92.2, 636.0], [92.3, 637.0], [92.4, 637.0], [92.5, 638.0], [92.6, 638.0], [92.7, 639.0], [92.8, 639.0], [92.9, 640.0], [93.0, 640.0], [93.1, 641.0], [93.2, 641.0], [93.3, 642.0], [93.4, 642.0], [93.5, 643.0], [93.6, 644.0], [93.7, 646.0], [93.8, 646.0], [93.9, 647.0], [94.0, 648.0], [94.1, 649.0], [94.2, 650.0], [94.3, 650.0], [94.4, 652.0], [94.5, 653.0], [94.6, 654.0], [94.7, 655.0], [94.8, 655.0], [94.9, 656.0], [95.0, 658.0], [95.1, 658.0], [95.2, 659.0], [95.3, 660.0], [95.4, 662.0], [95.5, 664.0], [95.6, 664.0], [95.7, 666.0], [95.8, 667.0], [95.9, 668.0], [96.0, 669.0], [96.1, 670.0], [96.2, 671.0], [96.3, 673.0], [96.4, 673.0], [96.5, 674.0], [96.6, 677.0], [96.7, 678.0], [96.8, 680.0], [96.9, 681.0], [97.0, 682.0], [97.1, 684.0], [97.2, 687.0], [97.3, 689.0], [97.4, 690.0], [97.5, 692.0], [97.6, 694.0], [97.7, 697.0], [97.8, 698.0], [97.9, 701.0], [98.0, 704.0], [98.1, 709.0], [98.2, 715.0], [98.3, 718.0], [98.4, 721.0], [98.5, 723.0], [98.6, 732.0], [98.7, 736.0], [98.8, 740.0], [98.9, 745.0], [99.0, 768.0], [99.1, 822.0], [99.2, 841.0], [99.3, 850.0], [99.4, 867.0], [99.5, 924.0], [99.6, 996.0], [99.7, 1062.0], [99.8, 1143.0], [99.9, 1269.0], [100.0, 1397.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 4.0, "minX": 300.0, "maxY": 2936.0, "series": [{"data": [[1100.0, 4.0], [600.0, 784.0], [1200.0, 4.0], [300.0, 33.0], [1300.0, 5.0], [700.0, 70.0], [800.0, 21.0], [400.0, 1677.0], [900.0, 8.0], [1000.0, 9.0], [500.0, 2936.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1751.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3800.0, "series": [{"data": [[0.0, 1751.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3800.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 40.83969465648855, "minX": 1.61556918E12, "maxY": 50.0, "series": [{"data": [[1.61556918E12, 50.0], [1.61556924E12, 40.83969465648855]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61556924E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 460.0, "minX": 1.0, "maxY": 712.5, "series": [{"data": [[33.0, 623.0], [2.0, 462.0], [34.0, 665.0], [37.0, 619.0], [36.0, 527.0], [39.0, 618.0], [41.0, 621.0], [43.0, 597.0], [42.0, 625.6666666666666], [45.0, 603.0], [44.0, 605.0], [47.0, 518.0], [46.0, 607.0], [49.0, 580.0], [48.0, 512.0], [3.0, 460.0], [50.0, 538.3769538349705], [4.0, 461.0], [5.0, 486.0], [8.0, 478.0], [9.0, 711.0], [11.0, 487.0], [14.0, 644.3333333333334], [15.0, 648.0], [16.0, 680.0], [1.0, 471.0], [17.0, 690.0], [18.0, 527.0], [19.0, 689.0], [21.0, 617.0], [22.0, 667.0], [24.0, 707.0], [25.0, 663.0], [27.0, 661.0], [31.0, 712.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[49.78382273464238, 538.9461358313833]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 257.6333333333333, "minX": 1.61556918E12, "maxY": 1927442.3333333333, "series": [{"data": [[1.61556918E12, 1927442.3333333333], [1.61556924E12, 46585.78333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.61556918E12, 10659.333333333334], [1.61556924E12, 257.6333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61556924E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 538.3677121771229, "minX": 1.61556918E12, "maxY": 562.8778625954199, "series": [{"data": [[1.61556918E12, 538.3677121771229], [1.61556924E12, 562.8778625954199]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61556924E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 537.8658671586701, "minX": 1.61556918E12, "maxY": 562.4274809160304, "series": [{"data": [[1.61556918E12, 537.8658671586701], [1.61556924E12, 562.4274809160304]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61556924E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.61556918E12, "maxY": 3.9645756457564465, "series": [{"data": [[1.61556918E12, 3.9645756457564465], [1.61556924E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61556924E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 350.0, "minX": 1.61556918E12, "maxY": 1397.0, "series": [{"data": [[1.61556918E12, 1397.0], [1.61556924E12, 768.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.61556918E12, 622.9000000000005], [1.61556924E12, 684.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.61556918E12, 770.3699999999999], [1.61556924E12, 761.9200000000001]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.61556918E12, 655.0], [1.61556924E12, 707.4]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.61556918E12, 350.0], [1.61556924E12, 434.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.61556918E12, 530.0], [1.61556924E12, 540.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61556924E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 475.0, "minX": 45.0, "maxY": 623.0, "series": [{"data": [[45.0, 623.0], [76.0, 585.0], [79.0, 552.0], [83.0, 552.0], [82.0, 572.0], [87.0, 560.0], [84.0, 582.5], [85.0, 578.0], [86.0, 532.5], [88.0, 529.5], [89.0, 560.0], [90.0, 515.0], [91.0, 538.0], [94.0, 533.0], [92.0, 526.0], [95.0, 521.5], [93.0, 543.0], [96.0, 525.0], [98.0, 523.5], [103.0, 500.0], [101.0, 505.0], [102.0, 508.0], [100.0, 526.0], [105.0, 475.0], [104.0, 508.0], [108.0, 497.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 108.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 475.0, "minX": 45.0, "maxY": 623.0, "series": [{"data": [[45.0, 623.0], [76.0, 585.0], [79.0, 551.0], [83.0, 551.0], [82.0, 571.0], [87.0, 559.0], [84.0, 582.5], [85.0, 577.5], [86.0, 531.5], [88.0, 529.0], [89.0, 559.0], [90.0, 514.5], [91.0, 537.5], [94.0, 532.0], [92.0, 526.0], [95.0, 521.5], [93.0, 542.0], [96.0, 524.5], [98.0, 522.5], [103.0, 499.0], [101.0, 504.0], [102.0, 507.0], [100.0, 526.0], [105.0, 475.0], [104.0, 507.5], [108.0, 496.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 108.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.35, "minX": 1.61556918E12, "maxY": 91.16666666666667, "series": [{"data": [[1.61556918E12, 91.16666666666667], [1.61556924E12, 1.35]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61556924E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.183333333333333, "minX": 1.61556918E12, "maxY": 90.33333333333333, "series": [{"data": [[1.61556918E12, 90.33333333333333], [1.61556924E12, 2.183333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61556924E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.183333333333333, "minX": 1.61556918E12, "maxY": 90.33333333333333, "series": [{"data": [[1.61556918E12, 90.33333333333333], [1.61556924E12, 2.183333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61556924E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.183333333333333, "minX": 1.61556918E12, "maxY": 90.33333333333333, "series": [{"data": [[1.61556918E12, 90.33333333333333], [1.61556924E12, 2.183333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61556924E12, "title": "Total Transactions Per Second"}},
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

