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
        data: {"result": {"minY": 323.0, "minX": 0.0, "maxY": 2049.0, "series": [{"data": [[0.0, 323.0], [0.1, 362.0], [0.2, 375.0], [0.3, 391.0], [0.4, 394.0], [0.5, 399.0], [0.6, 402.0], [0.7, 403.0], [0.8, 405.0], [0.9, 407.0], [1.0, 408.0], [1.1, 409.0], [1.2, 410.0], [1.3, 412.0], [1.4, 413.0], [1.5, 414.0], [1.6, 415.0], [1.7, 416.0], [1.8, 416.0], [1.9, 417.0], [2.0, 418.0], [2.1, 418.0], [2.2, 420.0], [2.3, 420.0], [2.4, 421.0], [2.5, 421.0], [2.6, 422.0], [2.7, 423.0], [2.8, 423.0], [2.9, 424.0], [3.0, 425.0], [3.1, 425.0], [3.2, 426.0], [3.3, 426.0], [3.4, 427.0], [3.5, 427.0], [3.6, 428.0], [3.7, 428.0], [3.8, 429.0], [3.9, 429.0], [4.0, 429.0], [4.1, 430.0], [4.2, 430.0], [4.3, 430.0], [4.4, 431.0], [4.5, 431.0], [4.6, 432.0], [4.7, 432.0], [4.8, 433.0], [4.9, 433.0], [5.0, 433.0], [5.1, 434.0], [5.2, 434.0], [5.3, 434.0], [5.4, 434.0], [5.5, 434.0], [5.6, 435.0], [5.7, 435.0], [5.8, 435.0], [5.9, 436.0], [6.0, 436.0], [6.1, 436.0], [6.2, 437.0], [6.3, 437.0], [6.4, 438.0], [6.5, 438.0], [6.6, 439.0], [6.7, 439.0], [6.8, 439.0], [6.9, 440.0], [7.0, 440.0], [7.1, 441.0], [7.2, 441.0], [7.3, 441.0], [7.4, 441.0], [7.5, 442.0], [7.6, 442.0], [7.7, 442.0], [7.8, 442.0], [7.9, 443.0], [8.0, 443.0], [8.1, 443.0], [8.2, 443.0], [8.3, 444.0], [8.4, 444.0], [8.5, 444.0], [8.6, 444.0], [8.7, 445.0], [8.8, 445.0], [8.9, 445.0], [9.0, 445.0], [9.1, 446.0], [9.2, 446.0], [9.3, 446.0], [9.4, 446.0], [9.5, 447.0], [9.6, 447.0], [9.7, 447.0], [9.8, 448.0], [9.9, 448.0], [10.0, 449.0], [10.1, 449.0], [10.2, 449.0], [10.3, 449.0], [10.4, 450.0], [10.5, 450.0], [10.6, 450.0], [10.7, 450.0], [10.8, 451.0], [10.9, 451.0], [11.0, 451.0], [11.1, 451.0], [11.2, 452.0], [11.3, 452.0], [11.4, 452.0], [11.5, 452.0], [11.6, 452.0], [11.7, 452.0], [11.8, 453.0], [11.9, 453.0], [12.0, 453.0], [12.1, 453.0], [12.2, 454.0], [12.3, 454.0], [12.4, 454.0], [12.5, 454.0], [12.6, 455.0], [12.7, 455.0], [12.8, 455.0], [12.9, 456.0], [13.0, 456.0], [13.1, 456.0], [13.2, 456.0], [13.3, 456.0], [13.4, 457.0], [13.5, 457.0], [13.6, 457.0], [13.7, 457.0], [13.8, 458.0], [13.9, 458.0], [14.0, 458.0], [14.1, 459.0], [14.2, 459.0], [14.3, 459.0], [14.4, 459.0], [14.5, 459.0], [14.6, 459.0], [14.7, 459.0], [14.8, 459.0], [14.9, 460.0], [15.0, 460.0], [15.1, 460.0], [15.2, 460.0], [15.3, 461.0], [15.4, 461.0], [15.5, 461.0], [15.6, 461.0], [15.7, 461.0], [15.8, 461.0], [15.9, 462.0], [16.0, 462.0], [16.1, 462.0], [16.2, 462.0], [16.3, 462.0], [16.4, 462.0], [16.5, 462.0], [16.6, 463.0], [16.7, 463.0], [16.8, 463.0], [16.9, 463.0], [17.0, 463.0], [17.1, 464.0], [17.2, 464.0], [17.3, 464.0], [17.4, 464.0], [17.5, 464.0], [17.6, 465.0], [17.7, 465.0], [17.8, 465.0], [17.9, 465.0], [18.0, 466.0], [18.1, 466.0], [18.2, 466.0], [18.3, 466.0], [18.4, 466.0], [18.5, 466.0], [18.6, 467.0], [18.7, 467.0], [18.8, 467.0], [18.9, 467.0], [19.0, 467.0], [19.1, 468.0], [19.2, 468.0], [19.3, 468.0], [19.4, 468.0], [19.5, 468.0], [19.6, 468.0], [19.7, 469.0], [19.8, 469.0], [19.9, 469.0], [20.0, 469.0], [20.1, 469.0], [20.2, 470.0], [20.3, 470.0], [20.4, 470.0], [20.5, 470.0], [20.6, 470.0], [20.7, 470.0], [20.8, 470.0], [20.9, 470.0], [21.0, 471.0], [21.1, 471.0], [21.2, 471.0], [21.3, 471.0], [21.4, 471.0], [21.5, 471.0], [21.6, 471.0], [21.7, 471.0], [21.8, 472.0], [21.9, 472.0], [22.0, 472.0], [22.1, 472.0], [22.2, 473.0], [22.3, 473.0], [22.4, 473.0], [22.5, 473.0], [22.6, 473.0], [22.7, 473.0], [22.8, 474.0], [22.9, 474.0], [23.0, 474.0], [23.1, 474.0], [23.2, 474.0], [23.3, 474.0], [23.4, 474.0], [23.5, 474.0], [23.6, 475.0], [23.7, 475.0], [23.8, 475.0], [23.9, 475.0], [24.0, 475.0], [24.1, 475.0], [24.2, 475.0], [24.3, 475.0], [24.4, 475.0], [24.5, 476.0], [24.6, 476.0], [24.7, 476.0], [24.8, 476.0], [24.9, 476.0], [25.0, 476.0], [25.1, 476.0], [25.2, 476.0], [25.3, 476.0], [25.4, 477.0], [25.5, 477.0], [25.6, 477.0], [25.7, 477.0], [25.8, 477.0], [25.9, 477.0], [26.0, 477.0], [26.1, 478.0], [26.2, 478.0], [26.3, 478.0], [26.4, 478.0], [26.5, 478.0], [26.6, 478.0], [26.7, 478.0], [26.8, 478.0], [26.9, 478.0], [27.0, 479.0], [27.1, 479.0], [27.2, 479.0], [27.3, 479.0], [27.4, 479.0], [27.5, 479.0], [27.6, 480.0], [27.7, 480.0], [27.8, 480.0], [27.9, 480.0], [28.0, 480.0], [28.1, 480.0], [28.2, 481.0], [28.3, 481.0], [28.4, 481.0], [28.5, 481.0], [28.6, 481.0], [28.7, 481.0], [28.8, 481.0], [28.9, 481.0], [29.0, 481.0], [29.1, 481.0], [29.2, 482.0], [29.3, 482.0], [29.4, 482.0], [29.5, 482.0], [29.6, 482.0], [29.7, 482.0], [29.8, 482.0], [29.9, 482.0], [30.0, 482.0], [30.1, 483.0], [30.2, 483.0], [30.3, 483.0], [30.4, 483.0], [30.5, 483.0], [30.6, 483.0], [30.7, 483.0], [30.8, 483.0], [30.9, 484.0], [31.0, 484.0], [31.1, 484.0], [31.2, 484.0], [31.3, 484.0], [31.4, 484.0], [31.5, 484.0], [31.6, 484.0], [31.7, 485.0], [31.8, 485.0], [31.9, 485.0], [32.0, 485.0], [32.1, 485.0], [32.2, 485.0], [32.3, 485.0], [32.4, 485.0], [32.5, 486.0], [32.6, 486.0], [32.7, 486.0], [32.8, 486.0], [32.9, 486.0], [33.0, 486.0], [33.1, 486.0], [33.2, 486.0], [33.3, 487.0], [33.4, 487.0], [33.5, 487.0], [33.6, 487.0], [33.7, 487.0], [33.8, 487.0], [33.9, 487.0], [34.0, 487.0], [34.1, 488.0], [34.2, 488.0], [34.3, 488.0], [34.4, 488.0], [34.5, 488.0], [34.6, 488.0], [34.7, 488.0], [34.8, 488.0], [34.9, 489.0], [35.0, 489.0], [35.1, 489.0], [35.2, 489.0], [35.3, 489.0], [35.4, 489.0], [35.5, 489.0], [35.6, 489.0], [35.7, 490.0], [35.8, 490.0], [35.9, 490.0], [36.0, 490.0], [36.1, 490.0], [36.2, 490.0], [36.3, 490.0], [36.4, 490.0], [36.5, 490.0], [36.6, 491.0], [36.7, 491.0], [36.8, 491.0], [36.9, 491.0], [37.0, 491.0], [37.1, 491.0], [37.2, 491.0], [37.3, 491.0], [37.4, 491.0], [37.5, 491.0], [37.6, 492.0], [37.7, 492.0], [37.8, 492.0], [37.9, 492.0], [38.0, 492.0], [38.1, 492.0], [38.2, 492.0], [38.3, 492.0], [38.4, 492.0], [38.5, 493.0], [38.6, 493.0], [38.7, 493.0], [38.8, 493.0], [38.9, 493.0], [39.0, 493.0], [39.1, 493.0], [39.2, 494.0], [39.3, 494.0], [39.4, 494.0], [39.5, 494.0], [39.6, 494.0], [39.7, 494.0], [39.8, 494.0], [39.9, 494.0], [40.0, 495.0], [40.1, 495.0], [40.2, 495.0], [40.3, 495.0], [40.4, 495.0], [40.5, 495.0], [40.6, 495.0], [40.7, 495.0], [40.8, 495.0], [40.9, 495.0], [41.0, 495.0], [41.1, 496.0], [41.2, 496.0], [41.3, 496.0], [41.4, 496.0], [41.5, 496.0], [41.6, 496.0], [41.7, 496.0], [41.8, 496.0], [41.9, 496.0], [42.0, 496.0], [42.1, 497.0], [42.2, 497.0], [42.3, 497.0], [42.4, 497.0], [42.5, 497.0], [42.6, 497.0], [42.7, 497.0], [42.8, 497.0], [42.9, 498.0], [43.0, 498.0], [43.1, 498.0], [43.2, 498.0], [43.3, 498.0], [43.4, 498.0], [43.5, 498.0], [43.6, 498.0], [43.7, 499.0], [43.8, 499.0], [43.9, 499.0], [44.0, 499.0], [44.1, 499.0], [44.2, 499.0], [44.3, 499.0], [44.4, 500.0], [44.5, 500.0], [44.6, 500.0], [44.7, 500.0], [44.8, 500.0], [44.9, 500.0], [45.0, 500.0], [45.1, 501.0], [45.2, 501.0], [45.3, 501.0], [45.4, 501.0], [45.5, 501.0], [45.6, 501.0], [45.7, 502.0], [45.8, 502.0], [45.9, 502.0], [46.0, 502.0], [46.1, 502.0], [46.2, 502.0], [46.3, 502.0], [46.4, 502.0], [46.5, 502.0], [46.6, 502.0], [46.7, 503.0], [46.8, 503.0], [46.9, 503.0], [47.0, 503.0], [47.1, 503.0], [47.2, 503.0], [47.3, 504.0], [47.4, 504.0], [47.5, 504.0], [47.6, 504.0], [47.7, 504.0], [47.8, 504.0], [47.9, 504.0], [48.0, 505.0], [48.1, 505.0], [48.2, 505.0], [48.3, 505.0], [48.4, 505.0], [48.5, 505.0], [48.6, 505.0], [48.7, 505.0], [48.8, 506.0], [48.9, 506.0], [49.0, 506.0], [49.1, 506.0], [49.2, 506.0], [49.3, 506.0], [49.4, 506.0], [49.5, 507.0], [49.6, 507.0], [49.7, 507.0], [49.8, 507.0], [49.9, 507.0], [50.0, 507.0], [50.1, 508.0], [50.2, 508.0], [50.3, 508.0], [50.4, 508.0], [50.5, 508.0], [50.6, 508.0], [50.7, 508.0], [50.8, 508.0], [50.9, 508.0], [51.0, 509.0], [51.1, 509.0], [51.2, 509.0], [51.3, 509.0], [51.4, 509.0], [51.5, 509.0], [51.6, 509.0], [51.7, 509.0], [51.8, 509.0], [51.9, 509.0], [52.0, 510.0], [52.1, 510.0], [52.2, 510.0], [52.3, 510.0], [52.4, 510.0], [52.5, 510.0], [52.6, 510.0], [52.7, 510.0], [52.8, 511.0], [52.9, 511.0], [53.0, 511.0], [53.1, 511.0], [53.2, 511.0], [53.3, 511.0], [53.4, 511.0], [53.5, 511.0], [53.6, 511.0], [53.7, 512.0], [53.8, 512.0], [53.9, 512.0], [54.0, 512.0], [54.1, 512.0], [54.2, 512.0], [54.3, 512.0], [54.4, 512.0], [54.5, 513.0], [54.6, 513.0], [54.7, 513.0], [54.8, 513.0], [54.9, 513.0], [55.0, 513.0], [55.1, 513.0], [55.2, 513.0], [55.3, 514.0], [55.4, 514.0], [55.5, 514.0], [55.6, 514.0], [55.7, 514.0], [55.8, 514.0], [55.9, 514.0], [56.0, 514.0], [56.1, 514.0], [56.2, 515.0], [56.3, 515.0], [56.4, 515.0], [56.5, 515.0], [56.6, 515.0], [56.7, 515.0], [56.8, 516.0], [56.9, 516.0], [57.0, 516.0], [57.1, 516.0], [57.2, 516.0], [57.3, 516.0], [57.4, 516.0], [57.5, 517.0], [57.6, 517.0], [57.7, 517.0], [57.8, 517.0], [57.9, 517.0], [58.0, 517.0], [58.1, 517.0], [58.2, 518.0], [58.3, 518.0], [58.4, 518.0], [58.5, 518.0], [58.6, 518.0], [58.7, 518.0], [58.8, 519.0], [58.9, 519.0], [59.0, 519.0], [59.1, 519.0], [59.2, 519.0], [59.3, 519.0], [59.4, 519.0], [59.5, 520.0], [59.6, 520.0], [59.7, 520.0], [59.8, 520.0], [59.9, 520.0], [60.0, 520.0], [60.1, 520.0], [60.2, 521.0], [60.3, 521.0], [60.4, 521.0], [60.5, 521.0], [60.6, 521.0], [60.7, 521.0], [60.8, 521.0], [60.9, 522.0], [61.0, 522.0], [61.1, 522.0], [61.2, 522.0], [61.3, 522.0], [61.4, 522.0], [61.5, 522.0], [61.6, 523.0], [61.7, 523.0], [61.8, 523.0], [61.9, 523.0], [62.0, 523.0], [62.1, 523.0], [62.2, 523.0], [62.3, 524.0], [62.4, 524.0], [62.5, 524.0], [62.6, 524.0], [62.7, 524.0], [62.8, 524.0], [62.9, 524.0], [63.0, 524.0], [63.1, 525.0], [63.2, 525.0], [63.3, 525.0], [63.4, 525.0], [63.5, 525.0], [63.6, 526.0], [63.7, 526.0], [63.8, 526.0], [63.9, 526.0], [64.0, 526.0], [64.1, 526.0], [64.2, 526.0], [64.3, 526.0], [64.4, 527.0], [64.5, 527.0], [64.6, 527.0], [64.7, 527.0], [64.8, 527.0], [64.9, 528.0], [65.0, 528.0], [65.1, 528.0], [65.2, 528.0], [65.3, 528.0], [65.4, 528.0], [65.5, 528.0], [65.6, 529.0], [65.7, 529.0], [65.8, 529.0], [65.9, 529.0], [66.0, 529.0], [66.1, 529.0], [66.2, 529.0], [66.3, 530.0], [66.4, 530.0], [66.5, 530.0], [66.6, 530.0], [66.7, 530.0], [66.8, 530.0], [66.9, 530.0], [67.0, 530.0], [67.1, 531.0], [67.2, 531.0], [67.3, 531.0], [67.4, 531.0], [67.5, 531.0], [67.6, 532.0], [67.7, 532.0], [67.8, 532.0], [67.9, 532.0], [68.0, 532.0], [68.1, 532.0], [68.2, 533.0], [68.3, 533.0], [68.4, 533.0], [68.5, 533.0], [68.6, 533.0], [68.7, 533.0], [68.8, 534.0], [68.9, 534.0], [69.0, 534.0], [69.1, 534.0], [69.2, 534.0], [69.3, 534.0], [69.4, 534.0], [69.5, 535.0], [69.6, 535.0], [69.7, 535.0], [69.8, 535.0], [69.9, 535.0], [70.0, 535.0], [70.1, 536.0], [70.2, 536.0], [70.3, 536.0], [70.4, 536.0], [70.5, 537.0], [70.6, 537.0], [70.7, 537.0], [70.8, 537.0], [70.9, 538.0], [71.0, 538.0], [71.1, 538.0], [71.2, 538.0], [71.3, 538.0], [71.4, 539.0], [71.5, 539.0], [71.6, 539.0], [71.7, 539.0], [71.8, 539.0], [71.9, 539.0], [72.0, 539.0], [72.1, 540.0], [72.2, 540.0], [72.3, 540.0], [72.4, 540.0], [72.5, 541.0], [72.6, 541.0], [72.7, 541.0], [72.8, 541.0], [72.9, 542.0], [73.0, 542.0], [73.1, 542.0], [73.2, 542.0], [73.3, 542.0], [73.4, 543.0], [73.5, 543.0], [73.6, 543.0], [73.7, 543.0], [73.8, 543.0], [73.9, 544.0], [74.0, 544.0], [74.1, 544.0], [74.2, 544.0], [74.3, 544.0], [74.4, 545.0], [74.5, 545.0], [74.6, 545.0], [74.7, 546.0], [74.8, 546.0], [74.9, 546.0], [75.0, 546.0], [75.1, 546.0], [75.2, 547.0], [75.3, 547.0], [75.4, 547.0], [75.5, 547.0], [75.6, 547.0], [75.7, 548.0], [75.8, 548.0], [75.9, 548.0], [76.0, 548.0], [76.1, 549.0], [76.2, 549.0], [76.3, 549.0], [76.4, 549.0], [76.5, 549.0], [76.6, 549.0], [76.7, 550.0], [76.8, 550.0], [76.9, 550.0], [77.0, 550.0], [77.1, 550.0], [77.2, 551.0], [77.3, 551.0], [77.4, 551.0], [77.5, 551.0], [77.6, 552.0], [77.7, 552.0], [77.8, 553.0], [77.9, 553.0], [78.0, 553.0], [78.1, 553.0], [78.2, 554.0], [78.3, 554.0], [78.4, 554.0], [78.5, 554.0], [78.6, 555.0], [78.7, 555.0], [78.8, 555.0], [78.9, 555.0], [79.0, 556.0], [79.1, 556.0], [79.2, 556.0], [79.3, 557.0], [79.4, 557.0], [79.5, 557.0], [79.6, 558.0], [79.7, 558.0], [79.8, 558.0], [79.9, 558.0], [80.0, 558.0], [80.1, 559.0], [80.2, 559.0], [80.3, 559.0], [80.4, 560.0], [80.5, 560.0], [80.6, 560.0], [80.7, 561.0], [80.8, 561.0], [80.9, 561.0], [81.0, 561.0], [81.1, 561.0], [81.2, 562.0], [81.3, 562.0], [81.4, 562.0], [81.5, 562.0], [81.6, 563.0], [81.7, 563.0], [81.8, 564.0], [81.9, 564.0], [82.0, 564.0], [82.1, 564.0], [82.2, 565.0], [82.3, 565.0], [82.4, 565.0], [82.5, 565.0], [82.6, 565.0], [82.7, 565.0], [82.8, 566.0], [82.9, 566.0], [83.0, 567.0], [83.1, 567.0], [83.2, 567.0], [83.3, 568.0], [83.4, 568.0], [83.5, 568.0], [83.6, 569.0], [83.7, 569.0], [83.8, 569.0], [83.9, 569.0], [84.0, 570.0], [84.1, 570.0], [84.2, 570.0], [84.3, 571.0], [84.4, 571.0], [84.5, 571.0], [84.6, 572.0], [84.7, 573.0], [84.8, 573.0], [84.9, 574.0], [85.0, 574.0], [85.1, 574.0], [85.2, 575.0], [85.3, 575.0], [85.4, 576.0], [85.5, 576.0], [85.6, 577.0], [85.7, 577.0], [85.8, 578.0], [85.9, 578.0], [86.0, 579.0], [86.1, 579.0], [86.2, 580.0], [86.3, 580.0], [86.4, 580.0], [86.5, 581.0], [86.6, 581.0], [86.7, 582.0], [86.8, 582.0], [86.9, 583.0], [87.0, 583.0], [87.1, 583.0], [87.2, 584.0], [87.3, 585.0], [87.4, 585.0], [87.5, 585.0], [87.6, 585.0], [87.7, 586.0], [87.8, 586.0], [87.9, 587.0], [88.0, 587.0], [88.1, 587.0], [88.2, 587.0], [88.3, 588.0], [88.4, 589.0], [88.5, 589.0], [88.6, 590.0], [88.7, 590.0], [88.8, 590.0], [88.9, 591.0], [89.0, 592.0], [89.1, 593.0], [89.2, 593.0], [89.3, 594.0], [89.4, 595.0], [89.5, 596.0], [89.6, 596.0], [89.7, 596.0], [89.8, 596.0], [89.9, 597.0], [90.0, 597.0], [90.1, 598.0], [90.2, 599.0], [90.3, 600.0], [90.4, 600.0], [90.5, 601.0], [90.6, 602.0], [90.7, 602.0], [90.8, 603.0], [90.9, 603.0], [91.0, 604.0], [91.1, 604.0], [91.2, 605.0], [91.3, 606.0], [91.4, 606.0], [91.5, 607.0], [91.6, 607.0], [91.7, 608.0], [91.8, 609.0], [91.9, 609.0], [92.0, 610.0], [92.1, 610.0], [92.2, 610.0], [92.3, 611.0], [92.4, 612.0], [92.5, 612.0], [92.6, 613.0], [92.7, 613.0], [92.8, 614.0], [92.9, 615.0], [93.0, 616.0], [93.1, 616.0], [93.2, 617.0], [93.3, 618.0], [93.4, 620.0], [93.5, 620.0], [93.6, 622.0], [93.7, 623.0], [93.8, 623.0], [93.9, 624.0], [94.0, 626.0], [94.1, 628.0], [94.2, 629.0], [94.3, 631.0], [94.4, 632.0], [94.5, 634.0], [94.6, 634.0], [94.7, 637.0], [94.8, 640.0], [94.9, 641.0], [95.0, 642.0], [95.1, 644.0], [95.2, 645.0], [95.3, 648.0], [95.4, 649.0], [95.5, 651.0], [95.6, 654.0], [95.7, 655.0], [95.8, 657.0], [95.9, 659.0], [96.0, 660.0], [96.1, 661.0], [96.2, 663.0], [96.3, 665.0], [96.4, 667.0], [96.5, 670.0], [96.6, 672.0], [96.7, 675.0], [96.8, 677.0], [96.9, 678.0], [97.0, 681.0], [97.1, 688.0], [97.2, 691.0], [97.3, 698.0], [97.4, 702.0], [97.5, 706.0], [97.6, 709.0], [97.7, 713.0], [97.8, 718.0], [97.9, 723.0], [98.0, 730.0], [98.1, 735.0], [98.2, 741.0], [98.3, 753.0], [98.4, 762.0], [98.5, 767.0], [98.6, 787.0], [98.7, 794.0], [98.8, 820.0], [98.9, 823.0], [99.0, 832.0], [99.1, 862.0], [99.2, 893.0], [99.3, 905.0], [99.4, 925.0], [99.5, 954.0], [99.6, 1038.0], [99.7, 1157.0], [99.8, 1287.0], [99.9, 1360.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 2633.0, "series": [{"data": [[600.0, 405.0], [700.0, 80.0], [800.0, 31.0], [900.0, 17.0], [1000.0, 6.0], [1100.0, 5.0], [1200.0, 4.0], [300.0, 29.0], [1300.0, 8.0], [1400.0, 1.0], [400.0, 2511.0], [500.0, 2633.0], [2000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3147.0, "series": [{"data": [[0.0, 2583.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3147.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 45.92542372881356, "minX": 1.61556048E12, "maxY": 50.0, "series": [{"data": [[1.61556048E12, 50.0], [1.61556054E12, 45.92542372881356]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61556054E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 323.0, "minX": 1.0, "maxY": 571.0, "series": [{"data": [[33.0, 526.6666666666666], [2.0, 326.0], [37.0, 522.0], [36.0, 505.6666666666667], [38.0, 498.0], [41.0, 571.0], [40.0, 516.5], [43.0, 483.0], [45.0, 559.0], [47.0, 533.0], [46.0, 555.0], [49.0, 529.0], [48.0, 559.0], [3.0, 362.0], [50.0, 521.4347060894054], [4.0, 360.0], [6.0, 398.0], [8.0, 370.5], [10.0, 396.5], [11.0, 353.0], [14.0, 425.6666666666667], [16.0, 440.5], [1.0, 323.0], [18.0, 478.5], [20.0, 466.0], [21.0, 416.0], [22.0, 493.0], [24.0, 439.0], [26.0, 490.0], [27.0, 546.0], [28.0, 458.0], [29.0, 519.0], [31.0, 543.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[49.79026347932297, 520.9881347059857]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 580.1666666666666, "minX": 1.61556048E12, "maxY": 1918455.0, "series": [{"data": [[1.61556048E12, 1918455.0], [1.61556054E12, 104110.41666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.61556048E12, 10690.8], [1.61556054E12, 580.1666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61556054E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 520.5754231052239, "minX": 1.61556048E12, "maxY": 528.5932203389833, "series": [{"data": [[1.61556048E12, 520.5754231052239], [1.61556054E12, 528.5932203389833]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61556054E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 520.0921633554075, "minX": 1.61556048E12, "maxY": 528.145762711864, "series": [{"data": [[1.61556048E12, 520.0921633554075], [1.61556054E12, 528.145762711864]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61556054E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.61556048E12, "maxY": 3.908388520971316, "series": [{"data": [[1.61556048E12, 3.908388520971316], [1.61556054E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61556054E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 323.0, "minX": 1.61556048E12, "maxY": 2049.0, "series": [{"data": [[1.61556048E12, 2049.0], [1.61556054E12, 1038.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.61556048E12, 596.0], [1.61556054E12, 610.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.61556048E12, 838.7800000000007], [1.61556054E12, 674.6400000000003]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.61556048E12, 644.0], [1.61556054E12, 630.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.61556048E12, 360.0], [1.61556054E12, 323.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.61556048E12, 506.0], [1.61556054E12, 523.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61556054E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 474.5, "minX": 24.0, "maxY": 917.5, "series": [{"data": [[79.0, 514.0], [77.0, 793.0], [80.0, 541.5], [83.0, 533.0], [87.0, 605.0], [84.0, 566.5], [90.0, 534.5], [88.0, 558.5], [89.0, 612.0], [91.0, 555.0], [95.0, 512.0], [93.0, 532.0], [94.0, 509.0], [99.0, 498.0], [98.0, 508.0], [97.0, 505.0], [96.0, 521.0], [102.0, 502.0], [100.0, 501.5], [101.0, 488.0], [103.0, 487.0], [106.0, 498.0], [104.0, 478.5], [107.0, 477.0], [108.0, 474.5], [109.0, 493.0], [111.0, 490.0], [24.0, 917.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 111.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 474.5, "minX": 24.0, "maxY": 913.5, "series": [{"data": [[79.0, 513.0], [77.0, 793.0], [80.0, 540.5], [83.0, 533.0], [87.0, 604.0], [84.0, 566.0], [90.0, 534.0], [88.0, 558.0], [89.0, 612.0], [91.0, 555.0], [95.0, 512.0], [93.0, 532.0], [94.0, 509.0], [99.0, 497.0], [98.0, 507.5], [97.0, 504.0], [96.0, 520.0], [102.0, 501.5], [100.0, 501.0], [101.0, 487.0], [103.0, 487.0], [106.0, 497.5], [104.0, 478.0], [107.0, 477.0], [108.0, 474.5], [109.0, 492.0], [111.0, 489.0], [24.0, 913.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 111.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.083333333333333, "minX": 1.61556048E12, "maxY": 91.43333333333334, "series": [{"data": [[1.61556048E12, 91.43333333333334], [1.61556054E12, 4.083333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61556054E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.916666666666667, "minX": 1.61556048E12, "maxY": 90.6, "series": [{"data": [[1.61556048E12, 90.6], [1.61556054E12, 4.916666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61556054E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.916666666666667, "minX": 1.61556048E12, "maxY": 90.6, "series": [{"data": [[1.61556048E12, 90.6], [1.61556054E12, 4.916666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61556054E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.916666666666667, "minX": 1.61556048E12, "maxY": 90.6, "series": [{"data": [[1.61556048E12, 90.6], [1.61556054E12, 4.916666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61556054E12, "title": "Total Transactions Per Second"}},
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

