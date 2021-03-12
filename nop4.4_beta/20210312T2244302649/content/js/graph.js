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
        data: {"result": {"minY": 252.0, "minX": 0.0, "maxY": 1716.0, "series": [{"data": [[0.0, 252.0], [0.1, 376.0], [0.2, 385.0], [0.3, 391.0], [0.4, 397.0], [0.5, 398.0], [0.6, 401.0], [0.7, 403.0], [0.8, 406.0], [0.9, 406.0], [1.0, 407.0], [1.1, 409.0], [1.2, 412.0], [1.3, 412.0], [1.4, 413.0], [1.5, 413.0], [1.6, 414.0], [1.7, 416.0], [1.8, 417.0], [1.9, 418.0], [2.0, 419.0], [2.1, 420.0], [2.2, 420.0], [2.3, 421.0], [2.4, 422.0], [2.5, 422.0], [2.6, 423.0], [2.7, 423.0], [2.8, 424.0], [2.9, 424.0], [3.0, 425.0], [3.1, 426.0], [3.2, 426.0], [3.3, 426.0], [3.4, 427.0], [3.5, 428.0], [3.6, 428.0], [3.7, 428.0], [3.8, 429.0], [3.9, 429.0], [4.0, 429.0], [4.1, 430.0], [4.2, 430.0], [4.3, 431.0], [4.4, 431.0], [4.5, 432.0], [4.6, 433.0], [4.7, 433.0], [4.8, 433.0], [4.9, 434.0], [5.0, 434.0], [5.1, 435.0], [5.2, 435.0], [5.3, 435.0], [5.4, 436.0], [5.5, 436.0], [5.6, 436.0], [5.7, 437.0], [5.8, 437.0], [5.9, 438.0], [6.0, 438.0], [6.1, 438.0], [6.2, 438.0], [6.3, 439.0], [6.4, 439.0], [6.5, 440.0], [6.6, 440.0], [6.7, 440.0], [6.8, 441.0], [6.9, 441.0], [7.0, 441.0], [7.1, 442.0], [7.2, 442.0], [7.3, 443.0], [7.4, 443.0], [7.5, 443.0], [7.6, 443.0], [7.7, 444.0], [7.8, 444.0], [7.9, 445.0], [8.0, 445.0], [8.1, 445.0], [8.2, 446.0], [8.3, 446.0], [8.4, 446.0], [8.5, 446.0], [8.6, 447.0], [8.7, 447.0], [8.8, 447.0], [8.9, 447.0], [9.0, 447.0], [9.1, 447.0], [9.2, 448.0], [9.3, 448.0], [9.4, 448.0], [9.5, 448.0], [9.6, 448.0], [9.7, 449.0], [9.8, 449.0], [9.9, 449.0], [10.0, 449.0], [10.1, 449.0], [10.2, 449.0], [10.3, 450.0], [10.4, 450.0], [10.5, 450.0], [10.6, 450.0], [10.7, 451.0], [10.8, 451.0], [10.9, 451.0], [11.0, 451.0], [11.1, 452.0], [11.2, 452.0], [11.3, 452.0], [11.4, 452.0], [11.5, 452.0], [11.6, 453.0], [11.7, 453.0], [11.8, 453.0], [11.9, 453.0], [12.0, 454.0], [12.1, 454.0], [12.2, 454.0], [12.3, 454.0], [12.4, 455.0], [12.5, 455.0], [12.6, 455.0], [12.7, 455.0], [12.8, 455.0], [12.9, 456.0], [13.0, 456.0], [13.1, 456.0], [13.2, 456.0], [13.3, 456.0], [13.4, 457.0], [13.5, 457.0], [13.6, 457.0], [13.7, 457.0], [13.8, 458.0], [13.9, 458.0], [14.0, 458.0], [14.1, 458.0], [14.2, 458.0], [14.3, 458.0], [14.4, 458.0], [14.5, 458.0], [14.6, 459.0], [14.7, 459.0], [14.8, 459.0], [14.9, 459.0], [15.0, 459.0], [15.1, 460.0], [15.2, 460.0], [15.3, 460.0], [15.4, 460.0], [15.5, 460.0], [15.6, 461.0], [15.7, 461.0], [15.8, 461.0], [15.9, 461.0], [16.0, 461.0], [16.1, 462.0], [16.2, 462.0], [16.3, 462.0], [16.4, 462.0], [16.5, 463.0], [16.6, 463.0], [16.7, 463.0], [16.8, 463.0], [16.9, 463.0], [17.0, 464.0], [17.1, 464.0], [17.2, 464.0], [17.3, 464.0], [17.4, 464.0], [17.5, 465.0], [17.6, 465.0], [17.7, 465.0], [17.8, 465.0], [17.9, 465.0], [18.0, 465.0], [18.1, 465.0], [18.2, 466.0], [18.3, 466.0], [18.4, 466.0], [18.5, 466.0], [18.6, 466.0], [18.7, 466.0], [18.8, 467.0], [18.9, 467.0], [19.0, 467.0], [19.1, 467.0], [19.2, 467.0], [19.3, 467.0], [19.4, 468.0], [19.5, 468.0], [19.6, 468.0], [19.7, 468.0], [19.8, 468.0], [19.9, 469.0], [20.0, 469.0], [20.1, 469.0], [20.2, 469.0], [20.3, 469.0], [20.4, 469.0], [20.5, 469.0], [20.6, 469.0], [20.7, 470.0], [20.8, 470.0], [20.9, 470.0], [21.0, 470.0], [21.1, 470.0], [21.2, 470.0], [21.3, 470.0], [21.4, 471.0], [21.5, 471.0], [21.6, 471.0], [21.7, 471.0], [21.8, 471.0], [21.9, 471.0], [22.0, 471.0], [22.1, 472.0], [22.2, 472.0], [22.3, 472.0], [22.4, 472.0], [22.5, 472.0], [22.6, 472.0], [22.7, 473.0], [22.8, 473.0], [22.9, 473.0], [23.0, 473.0], [23.1, 473.0], [23.2, 473.0], [23.3, 473.0], [23.4, 473.0], [23.5, 474.0], [23.6, 474.0], [23.7, 474.0], [23.8, 474.0], [23.9, 474.0], [24.0, 474.0], [24.1, 474.0], [24.2, 475.0], [24.3, 475.0], [24.4, 475.0], [24.5, 475.0], [24.6, 475.0], [24.7, 475.0], [24.8, 475.0], [24.9, 475.0], [25.0, 476.0], [25.1, 476.0], [25.2, 476.0], [25.3, 476.0], [25.4, 477.0], [25.5, 477.0], [25.6, 477.0], [25.7, 477.0], [25.8, 477.0], [25.9, 477.0], [26.0, 478.0], [26.1, 478.0], [26.2, 478.0], [26.3, 478.0], [26.4, 478.0], [26.5, 478.0], [26.6, 478.0], [26.7, 479.0], [26.8, 479.0], [26.9, 479.0], [27.0, 479.0], [27.1, 479.0], [27.2, 479.0], [27.3, 480.0], [27.4, 480.0], [27.5, 480.0], [27.6, 480.0], [27.7, 480.0], [27.8, 480.0], [27.9, 481.0], [28.0, 481.0], [28.1, 481.0], [28.2, 481.0], [28.3, 482.0], [28.4, 482.0], [28.5, 482.0], [28.6, 482.0], [28.7, 482.0], [28.8, 482.0], [28.9, 482.0], [29.0, 482.0], [29.1, 483.0], [29.2, 483.0], [29.3, 483.0], [29.4, 483.0], [29.5, 483.0], [29.6, 483.0], [29.7, 483.0], [29.8, 484.0], [29.9, 484.0], [30.0, 484.0], [30.1, 484.0], [30.2, 484.0], [30.3, 484.0], [30.4, 485.0], [30.5, 485.0], [30.6, 485.0], [30.7, 485.0], [30.8, 485.0], [30.9, 485.0], [31.0, 485.0], [31.1, 486.0], [31.2, 486.0], [31.3, 486.0], [31.4, 486.0], [31.5, 486.0], [31.6, 486.0], [31.7, 486.0], [31.8, 486.0], [31.9, 486.0], [32.0, 486.0], [32.1, 487.0], [32.2, 487.0], [32.3, 487.0], [32.4, 487.0], [32.5, 487.0], [32.6, 487.0], [32.7, 488.0], [32.8, 488.0], [32.9, 488.0], [33.0, 488.0], [33.1, 488.0], [33.2, 488.0], [33.3, 488.0], [33.4, 488.0], [33.5, 489.0], [33.6, 489.0], [33.7, 489.0], [33.8, 489.0], [33.9, 489.0], [34.0, 489.0], [34.1, 489.0], [34.2, 489.0], [34.3, 489.0], [34.4, 490.0], [34.5, 490.0], [34.6, 490.0], [34.7, 490.0], [34.8, 490.0], [34.9, 490.0], [35.0, 490.0], [35.1, 490.0], [35.2, 490.0], [35.3, 491.0], [35.4, 491.0], [35.5, 491.0], [35.6, 491.0], [35.7, 491.0], [35.8, 491.0], [35.9, 491.0], [36.0, 491.0], [36.1, 492.0], [36.2, 492.0], [36.3, 492.0], [36.4, 492.0], [36.5, 492.0], [36.6, 492.0], [36.7, 492.0], [36.8, 493.0], [36.9, 493.0], [37.0, 493.0], [37.1, 493.0], [37.2, 493.0], [37.3, 493.0], [37.4, 493.0], [37.5, 493.0], [37.6, 494.0], [37.7, 494.0], [37.8, 494.0], [37.9, 494.0], [38.0, 494.0], [38.1, 494.0], [38.2, 494.0], [38.3, 495.0], [38.4, 495.0], [38.5, 495.0], [38.6, 495.0], [38.7, 495.0], [38.8, 495.0], [38.9, 496.0], [39.0, 496.0], [39.1, 496.0], [39.2, 496.0], [39.3, 496.0], [39.4, 497.0], [39.5, 497.0], [39.6, 497.0], [39.7, 497.0], [39.8, 497.0], [39.9, 497.0], [40.0, 498.0], [40.1, 498.0], [40.2, 498.0], [40.3, 498.0], [40.4, 498.0], [40.5, 498.0], [40.6, 498.0], [40.7, 498.0], [40.8, 499.0], [40.9, 499.0], [41.0, 499.0], [41.1, 499.0], [41.2, 499.0], [41.3, 499.0], [41.4, 499.0], [41.5, 499.0], [41.6, 500.0], [41.7, 500.0], [41.8, 500.0], [41.9, 500.0], [42.0, 500.0], [42.1, 500.0], [42.2, 500.0], [42.3, 500.0], [42.4, 501.0], [42.5, 501.0], [42.6, 501.0], [42.7, 501.0], [42.8, 501.0], [42.9, 501.0], [43.0, 502.0], [43.1, 502.0], [43.2, 502.0], [43.3, 502.0], [43.4, 502.0], [43.5, 502.0], [43.6, 502.0], [43.7, 502.0], [43.8, 503.0], [43.9, 503.0], [44.0, 503.0], [44.1, 503.0], [44.2, 503.0], [44.3, 503.0], [44.4, 504.0], [44.5, 504.0], [44.6, 504.0], [44.7, 504.0], [44.8, 504.0], [44.9, 504.0], [45.0, 504.0], [45.1, 505.0], [45.2, 505.0], [45.3, 505.0], [45.4, 505.0], [45.5, 505.0], [45.6, 505.0], [45.7, 505.0], [45.8, 506.0], [45.9, 506.0], [46.0, 506.0], [46.1, 506.0], [46.2, 506.0], [46.3, 506.0], [46.4, 507.0], [46.5, 507.0], [46.6, 507.0], [46.7, 507.0], [46.8, 507.0], [46.9, 507.0], [47.0, 508.0], [47.1, 508.0], [47.2, 508.0], [47.3, 508.0], [47.4, 508.0], [47.5, 508.0], [47.6, 508.0], [47.7, 509.0], [47.8, 509.0], [47.9, 509.0], [48.0, 509.0], [48.1, 509.0], [48.2, 509.0], [48.3, 509.0], [48.4, 509.0], [48.5, 509.0], [48.6, 509.0], [48.7, 510.0], [48.8, 510.0], [48.9, 510.0], [49.0, 510.0], [49.1, 510.0], [49.2, 510.0], [49.3, 511.0], [49.4, 511.0], [49.5, 511.0], [49.6, 511.0], [49.7, 511.0], [49.8, 511.0], [49.9, 511.0], [50.0, 512.0], [50.1, 512.0], [50.2, 512.0], [50.3, 512.0], [50.4, 513.0], [50.5, 513.0], [50.6, 513.0], [50.7, 513.0], [50.8, 513.0], [50.9, 514.0], [51.0, 514.0], [51.1, 514.0], [51.2, 514.0], [51.3, 514.0], [51.4, 514.0], [51.5, 514.0], [51.6, 514.0], [51.7, 515.0], [51.8, 515.0], [51.9, 515.0], [52.0, 515.0], [52.1, 515.0], [52.2, 515.0], [52.3, 515.0], [52.4, 515.0], [52.5, 516.0], [52.6, 516.0], [52.7, 516.0], [52.8, 516.0], [52.9, 516.0], [53.0, 516.0], [53.1, 516.0], [53.2, 517.0], [53.3, 517.0], [53.4, 517.0], [53.5, 517.0], [53.6, 517.0], [53.7, 518.0], [53.8, 518.0], [53.9, 518.0], [54.0, 518.0], [54.1, 518.0], [54.2, 518.0], [54.3, 518.0], [54.4, 519.0], [54.5, 519.0], [54.6, 519.0], [54.7, 519.0], [54.8, 519.0], [54.9, 519.0], [55.0, 519.0], [55.1, 519.0], [55.2, 520.0], [55.3, 520.0], [55.4, 520.0], [55.5, 520.0], [55.6, 520.0], [55.7, 520.0], [55.8, 521.0], [55.9, 521.0], [56.0, 521.0], [56.1, 521.0], [56.2, 521.0], [56.3, 521.0], [56.4, 522.0], [56.5, 522.0], [56.6, 522.0], [56.7, 522.0], [56.8, 522.0], [56.9, 523.0], [57.0, 523.0], [57.1, 523.0], [57.2, 523.0], [57.3, 523.0], [57.4, 523.0], [57.5, 524.0], [57.6, 524.0], [57.7, 524.0], [57.8, 524.0], [57.9, 524.0], [58.0, 525.0], [58.1, 525.0], [58.2, 525.0], [58.3, 525.0], [58.4, 525.0], [58.5, 525.0], [58.6, 526.0], [58.7, 526.0], [58.8, 526.0], [58.9, 526.0], [59.0, 527.0], [59.1, 527.0], [59.2, 527.0], [59.3, 527.0], [59.4, 527.0], [59.5, 528.0], [59.6, 528.0], [59.7, 528.0], [59.8, 528.0], [59.9, 528.0], [60.0, 529.0], [60.1, 529.0], [60.2, 529.0], [60.3, 529.0], [60.4, 529.0], [60.5, 530.0], [60.6, 530.0], [60.7, 530.0], [60.8, 530.0], [60.9, 530.0], [61.0, 530.0], [61.1, 530.0], [61.2, 531.0], [61.3, 531.0], [61.4, 531.0], [61.5, 531.0], [61.6, 531.0], [61.7, 531.0], [61.8, 531.0], [61.9, 531.0], [62.0, 531.0], [62.1, 532.0], [62.2, 532.0], [62.3, 532.0], [62.4, 532.0], [62.5, 532.0], [62.6, 533.0], [62.7, 533.0], [62.8, 533.0], [62.9, 533.0], [63.0, 533.0], [63.1, 533.0], [63.2, 534.0], [63.3, 534.0], [63.4, 534.0], [63.5, 534.0], [63.6, 534.0], [63.7, 535.0], [63.8, 535.0], [63.9, 535.0], [64.0, 535.0], [64.1, 535.0], [64.2, 535.0], [64.3, 535.0], [64.4, 535.0], [64.5, 536.0], [64.6, 536.0], [64.7, 536.0], [64.8, 536.0], [64.9, 536.0], [65.0, 536.0], [65.1, 537.0], [65.2, 537.0], [65.3, 537.0], [65.4, 537.0], [65.5, 537.0], [65.6, 537.0], [65.7, 538.0], [65.8, 538.0], [65.9, 538.0], [66.0, 538.0], [66.1, 538.0], [66.2, 538.0], [66.3, 539.0], [66.4, 539.0], [66.5, 539.0], [66.6, 539.0], [66.7, 539.0], [66.8, 540.0], [66.9, 540.0], [67.0, 540.0], [67.1, 540.0], [67.2, 540.0], [67.3, 541.0], [67.4, 541.0], [67.5, 541.0], [67.6, 541.0], [67.7, 541.0], [67.8, 541.0], [67.9, 542.0], [68.0, 542.0], [68.1, 542.0], [68.2, 542.0], [68.3, 542.0], [68.4, 542.0], [68.5, 543.0], [68.6, 543.0], [68.7, 543.0], [68.8, 543.0], [68.9, 544.0], [69.0, 544.0], [69.1, 544.0], [69.2, 545.0], [69.3, 545.0], [69.4, 545.0], [69.5, 545.0], [69.6, 546.0], [69.7, 546.0], [69.8, 546.0], [69.9, 546.0], [70.0, 546.0], [70.1, 546.0], [70.2, 547.0], [70.3, 547.0], [70.4, 547.0], [70.5, 547.0], [70.6, 547.0], [70.7, 548.0], [70.8, 548.0], [70.9, 548.0], [71.0, 548.0], [71.1, 548.0], [71.2, 549.0], [71.3, 549.0], [71.4, 549.0], [71.5, 550.0], [71.6, 550.0], [71.7, 550.0], [71.8, 550.0], [71.9, 550.0], [72.0, 551.0], [72.1, 551.0], [72.2, 551.0], [72.3, 551.0], [72.4, 551.0], [72.5, 551.0], [72.6, 552.0], [72.7, 552.0], [72.8, 552.0], [72.9, 552.0], [73.0, 553.0], [73.1, 553.0], [73.2, 553.0], [73.3, 553.0], [73.4, 554.0], [73.5, 554.0], [73.6, 554.0], [73.7, 554.0], [73.8, 554.0], [73.9, 554.0], [74.0, 555.0], [74.1, 555.0], [74.2, 556.0], [74.3, 556.0], [74.4, 556.0], [74.5, 556.0], [74.6, 557.0], [74.7, 557.0], [74.8, 557.0], [74.9, 557.0], [75.0, 557.0], [75.1, 558.0], [75.2, 558.0], [75.3, 558.0], [75.4, 558.0], [75.5, 559.0], [75.6, 559.0], [75.7, 559.0], [75.8, 559.0], [75.9, 559.0], [76.0, 560.0], [76.1, 560.0], [76.2, 560.0], [76.3, 561.0], [76.4, 561.0], [76.5, 561.0], [76.6, 561.0], [76.7, 562.0], [76.8, 562.0], [76.9, 562.0], [77.0, 563.0], [77.1, 563.0], [77.2, 563.0], [77.3, 564.0], [77.4, 564.0], [77.5, 564.0], [77.6, 565.0], [77.7, 565.0], [77.8, 565.0], [77.9, 565.0], [78.0, 566.0], [78.1, 566.0], [78.2, 566.0], [78.3, 567.0], [78.4, 567.0], [78.5, 567.0], [78.6, 567.0], [78.7, 568.0], [78.8, 568.0], [78.9, 568.0], [79.0, 568.0], [79.1, 568.0], [79.2, 569.0], [79.3, 569.0], [79.4, 569.0], [79.5, 569.0], [79.6, 570.0], [79.7, 570.0], [79.8, 570.0], [79.9, 570.0], [80.0, 571.0], [80.1, 571.0], [80.2, 571.0], [80.3, 572.0], [80.4, 572.0], [80.5, 572.0], [80.6, 573.0], [80.7, 573.0], [80.8, 573.0], [80.9, 573.0], [81.0, 574.0], [81.1, 574.0], [81.2, 574.0], [81.3, 575.0], [81.4, 575.0], [81.5, 576.0], [81.6, 576.0], [81.7, 576.0], [81.8, 577.0], [81.9, 577.0], [82.0, 577.0], [82.1, 577.0], [82.2, 578.0], [82.3, 578.0], [82.4, 578.0], [82.5, 579.0], [82.6, 579.0], [82.7, 580.0], [82.8, 580.0], [82.9, 580.0], [83.0, 580.0], [83.1, 580.0], [83.2, 581.0], [83.3, 581.0], [83.4, 582.0], [83.5, 582.0], [83.6, 582.0], [83.7, 582.0], [83.8, 583.0], [83.9, 583.0], [84.0, 584.0], [84.1, 584.0], [84.2, 584.0], [84.3, 585.0], [84.4, 585.0], [84.5, 585.0], [84.6, 586.0], [84.7, 586.0], [84.8, 587.0], [84.9, 587.0], [85.0, 587.0], [85.1, 587.0], [85.2, 588.0], [85.3, 588.0], [85.4, 589.0], [85.5, 589.0], [85.6, 589.0], [85.7, 589.0], [85.8, 590.0], [85.9, 590.0], [86.0, 590.0], [86.1, 591.0], [86.2, 591.0], [86.3, 592.0], [86.4, 592.0], [86.5, 592.0], [86.6, 593.0], [86.7, 593.0], [86.8, 593.0], [86.9, 594.0], [87.0, 594.0], [87.1, 594.0], [87.2, 595.0], [87.3, 595.0], [87.4, 595.0], [87.5, 596.0], [87.6, 596.0], [87.7, 596.0], [87.8, 597.0], [87.9, 598.0], [88.0, 599.0], [88.1, 599.0], [88.2, 600.0], [88.3, 601.0], [88.4, 602.0], [88.5, 602.0], [88.6, 603.0], [88.7, 604.0], [88.8, 604.0], [88.9, 605.0], [89.0, 605.0], [89.1, 606.0], [89.2, 607.0], [89.3, 608.0], [89.4, 608.0], [89.5, 608.0], [89.6, 609.0], [89.7, 610.0], [89.8, 610.0], [89.9, 610.0], [90.0, 611.0], [90.1, 611.0], [90.2, 612.0], [90.3, 613.0], [90.4, 613.0], [90.5, 614.0], [90.6, 614.0], [90.7, 615.0], [90.8, 615.0], [90.9, 616.0], [91.0, 617.0], [91.1, 618.0], [91.2, 618.0], [91.3, 619.0], [91.4, 619.0], [91.5, 620.0], [91.6, 620.0], [91.7, 621.0], [91.8, 622.0], [91.9, 623.0], [92.0, 623.0], [92.1, 624.0], [92.2, 624.0], [92.3, 625.0], [92.4, 626.0], [92.5, 627.0], [92.6, 628.0], [92.7, 628.0], [92.8, 629.0], [92.9, 629.0], [93.0, 630.0], [93.1, 630.0], [93.2, 631.0], [93.3, 631.0], [93.4, 632.0], [93.5, 633.0], [93.6, 633.0], [93.7, 634.0], [93.8, 635.0], [93.9, 636.0], [94.0, 638.0], [94.1, 639.0], [94.2, 639.0], [94.3, 640.0], [94.4, 641.0], [94.5, 642.0], [94.6, 642.0], [94.7, 644.0], [94.8, 645.0], [94.9, 648.0], [95.0, 649.0], [95.1, 650.0], [95.2, 651.0], [95.3, 653.0], [95.4, 655.0], [95.5, 656.0], [95.6, 658.0], [95.7, 659.0], [95.8, 662.0], [95.9, 664.0], [96.0, 666.0], [96.1, 667.0], [96.2, 669.0], [96.3, 670.0], [96.4, 672.0], [96.5, 675.0], [96.6, 676.0], [96.7, 677.0], [96.8, 679.0], [96.9, 682.0], [97.0, 688.0], [97.1, 692.0], [97.2, 695.0], [97.3, 698.0], [97.4, 702.0], [97.5, 705.0], [97.6, 713.0], [97.7, 716.0], [97.8, 720.0], [97.9, 728.0], [98.0, 735.0], [98.1, 740.0], [98.2, 747.0], [98.3, 754.0], [98.4, 770.0], [98.5, 776.0], [98.6, 788.0], [98.7, 797.0], [98.8, 814.0], [98.9, 823.0], [99.0, 850.0], [99.1, 915.0], [99.2, 947.0], [99.3, 1021.0], [99.4, 1118.0], [99.5, 1241.0], [99.6, 1298.0], [99.7, 1425.0], [99.8, 1509.0], [99.9, 1638.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 2634.0, "series": [{"data": [[600.0, 517.0], [700.0, 78.0], [800.0, 22.0], [200.0, 2.0], [900.0, 11.0], [1000.0, 5.0], [1100.0, 5.0], [1200.0, 8.0], [300.0, 27.0], [1300.0, 4.0], [1400.0, 6.0], [1500.0, 5.0], [1600.0, 6.0], [400.0, 2318.0], [1700.0, 1.0], [500.0, 2634.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 12.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3247.0, "series": [{"data": [[0.0, 2390.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3247.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 12.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 49.62261793189626, "minX": 1.61556024E12, "maxY": 50.0, "series": [{"data": [[1.61556024E12, 50.0], [1.6155603E12, 49.62261793189626]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6155603E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 252.0, "minX": 1.0, "maxY": 628.0, "series": [{"data": [[33.0, 532.6666666666666], [2.0, 380.0], [35.0, 587.0], [36.0, 594.0], [39.0, 589.0], [38.0, 574.0], [43.0, 599.6666666666666], [42.0, 576.0], [45.0, 581.0], [47.0, 595.0], [46.0, 560.0], [49.0, 628.0], [3.0, 391.0], [50.0, 528.2144642857146], [4.0, 387.0], [5.0, 265.0], [6.0, 421.0], [7.0, 495.0], [8.0, 483.0], [9.0, 449.0], [10.0, 490.0], [11.0, 495.0], [12.0, 502.0], [13.0, 475.0], [15.0, 483.5], [16.0, 535.0], [1.0, 252.0], [19.0, 497.0], [20.0, 486.0], [21.0, 559.0], [22.0, 546.0], [23.0, 539.0], [24.0, 537.0], [25.0, 535.0], [26.0, 535.0], [28.0, 542.0], [29.0, 566.0], [30.0, 509.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[49.78615684191892, 528.1334749513192]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4814.4, "minX": 1.61556024E12, "maxY": 1129686.25, "series": [{"data": [[1.61556024E12, 863940.0], [1.6155603E12, 1129686.25]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.61556024E12, 4814.4], [1.6155603E12, 6295.3]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6155603E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 505.13245860668576, "minX": 1.61556024E12, "maxY": 558.2095588235287, "series": [{"data": [[1.61556024E12, 558.2095588235287], [1.6155603E12, 505.13245860668576]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6155603E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 504.618244298656, "minX": 1.61556024E12, "maxY": 557.7022058823529, "series": [{"data": [[1.61556024E12, 557.7022058823529], [1.6155603E12, 504.618244298656]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6155603E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.61556024E12, "maxY": 10.541666666666659, "series": [{"data": [[1.61556024E12, 10.541666666666659], [1.6155603E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6155603E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 252.0, "minX": 1.61556024E12, "maxY": 1716.0, "series": [{"data": [[1.61556024E12, 1716.0], [1.6155603E12, 1298.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.61556024E12, 653.0999999999999], [1.6155603E12, 579.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.61556024E12, 1259.0199999999995], [1.6155603E12, 644.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.61556024E12, 718.5499999999997], [1.6155603E12, 608.8999999999996]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.61556024E12, 356.0], [1.6155603E12, 252.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.61556024E12, 533.0], [1.6155603E12, 498.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6155603E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 448.0, "minX": 36.0, "maxY": 1254.5, "series": [{"data": [[36.0, 505.0], [50.0, 1254.5], [62.0, 746.5], [81.0, 592.0], [87.0, 570.0], [85.0, 611.0], [89.0, 539.0], [88.0, 562.5], [91.0, 500.0], [95.0, 519.0], [92.0, 493.5], [93.0, 514.0], [94.0, 515.0], [97.0, 525.0], [99.0, 510.0], [98.0, 501.0], [96.0, 492.0], [100.0, 507.0], [101.0, 514.0], [102.0, 496.5], [105.0, 489.0], [106.0, 482.5], [104.0, 486.0], [109.0, 483.0], [111.0, 469.0], [108.0, 466.0], [114.0, 448.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 114.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 447.5, "minX": 36.0, "maxY": 1254.0, "series": [{"data": [[36.0, 504.5], [50.0, 1254.0], [62.0, 745.0], [81.0, 592.0], [87.0, 570.0], [85.0, 610.5], [89.0, 539.0], [88.0, 561.0], [91.0, 499.0], [95.0, 519.0], [92.0, 492.5], [93.0, 514.0], [94.0, 514.0], [97.0, 524.5], [99.0, 509.0], [98.0, 501.0], [96.0, 491.5], [100.0, 506.5], [101.0, 513.0], [102.0, 496.0], [105.0, 489.0], [106.0, 482.5], [104.0, 485.5], [109.0, 483.0], [111.0, 468.5], [108.0, 465.0], [114.0, 447.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 114.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 41.63333333333333, "minX": 1.61556024E12, "maxY": 52.516666666666666, "series": [{"data": [[1.61556024E12, 41.63333333333333], [1.6155603E12, 52.516666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6155603E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 40.8, "minX": 1.61556024E12, "maxY": 53.35, "series": [{"data": [[1.61556024E12, 40.8], [1.6155603E12, 53.35]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6155603E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 40.8, "minX": 1.61556024E12, "maxY": 53.35, "series": [{"data": [[1.61556024E12, 40.8], [1.6155603E12, 53.35]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6155603E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 40.8, "minX": 1.61556024E12, "maxY": 53.35, "series": [{"data": [[1.61556024E12, 40.8], [1.6155603E12, 53.35]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6155603E12, "title": "Total Transactions Per Second"}},
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

