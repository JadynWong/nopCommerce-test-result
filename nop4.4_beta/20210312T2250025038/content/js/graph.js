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
        data: {"result": {"minY": 344.0, "minX": 0.0, "maxY": 1391.0, "series": [{"data": [[0.0, 344.0], [0.1, 362.0], [0.2, 372.0], [0.3, 382.0], [0.4, 389.0], [0.5, 390.0], [0.6, 395.0], [0.7, 396.0], [0.8, 398.0], [0.9, 400.0], [1.0, 401.0], [1.1, 403.0], [1.2, 405.0], [1.3, 407.0], [1.4, 408.0], [1.5, 408.0], [1.6, 409.0], [1.7, 410.0], [1.8, 411.0], [1.9, 412.0], [2.0, 413.0], [2.1, 414.0], [2.2, 414.0], [2.3, 415.0], [2.4, 415.0], [2.5, 416.0], [2.6, 416.0], [2.7, 416.0], [2.8, 418.0], [2.9, 418.0], [3.0, 419.0], [3.1, 419.0], [3.2, 420.0], [3.3, 420.0], [3.4, 421.0], [3.5, 422.0], [3.6, 422.0], [3.7, 423.0], [3.8, 423.0], [3.9, 423.0], [4.0, 424.0], [4.1, 424.0], [4.2, 425.0], [4.3, 425.0], [4.4, 426.0], [4.5, 426.0], [4.6, 426.0], [4.7, 427.0], [4.8, 427.0], [4.9, 427.0], [5.0, 428.0], [5.1, 428.0], [5.2, 429.0], [5.3, 429.0], [5.4, 429.0], [5.5, 429.0], [5.6, 430.0], [5.7, 430.0], [5.8, 430.0], [5.9, 430.0], [6.0, 431.0], [6.1, 431.0], [6.2, 432.0], [6.3, 432.0], [6.4, 432.0], [6.5, 432.0], [6.6, 432.0], [6.7, 433.0], [6.8, 433.0], [6.9, 433.0], [7.0, 434.0], [7.1, 434.0], [7.2, 434.0], [7.3, 435.0], [7.4, 435.0], [7.5, 435.0], [7.6, 435.0], [7.7, 436.0], [7.8, 436.0], [7.9, 437.0], [8.0, 437.0], [8.1, 437.0], [8.2, 438.0], [8.3, 438.0], [8.4, 438.0], [8.5, 438.0], [8.6, 439.0], [8.7, 439.0], [8.8, 439.0], [8.9, 439.0], [9.0, 439.0], [9.1, 439.0], [9.2, 440.0], [9.3, 440.0], [9.4, 440.0], [9.5, 440.0], [9.6, 440.0], [9.7, 441.0], [9.8, 441.0], [9.9, 441.0], [10.0, 441.0], [10.1, 442.0], [10.2, 442.0], [10.3, 442.0], [10.4, 442.0], [10.5, 442.0], [10.6, 442.0], [10.7, 443.0], [10.8, 443.0], [10.9, 443.0], [11.0, 444.0], [11.1, 444.0], [11.2, 444.0], [11.3, 444.0], [11.4, 444.0], [11.5, 444.0], [11.6, 445.0], [11.7, 445.0], [11.8, 445.0], [11.9, 445.0], [12.0, 446.0], [12.1, 446.0], [12.2, 446.0], [12.3, 446.0], [12.4, 446.0], [12.5, 446.0], [12.6, 447.0], [12.7, 447.0], [12.8, 447.0], [12.9, 447.0], [13.0, 447.0], [13.1, 447.0], [13.2, 448.0], [13.3, 448.0], [13.4, 448.0], [13.5, 448.0], [13.6, 448.0], [13.7, 448.0], [13.8, 449.0], [13.9, 449.0], [14.0, 449.0], [14.1, 449.0], [14.2, 449.0], [14.3, 450.0], [14.4, 450.0], [14.5, 450.0], [14.6, 450.0], [14.7, 450.0], [14.8, 450.0], [14.9, 450.0], [15.0, 451.0], [15.1, 451.0], [15.2, 451.0], [15.3, 451.0], [15.4, 451.0], [15.5, 452.0], [15.6, 452.0], [15.7, 452.0], [15.8, 452.0], [15.9, 453.0], [16.0, 453.0], [16.1, 453.0], [16.2, 453.0], [16.3, 453.0], [16.4, 453.0], [16.5, 454.0], [16.6, 454.0], [16.7, 454.0], [16.8, 454.0], [16.9, 454.0], [17.0, 454.0], [17.1, 455.0], [17.2, 455.0], [17.3, 455.0], [17.4, 455.0], [17.5, 455.0], [17.6, 455.0], [17.7, 456.0], [17.8, 456.0], [17.9, 456.0], [18.0, 456.0], [18.1, 456.0], [18.2, 456.0], [18.3, 457.0], [18.4, 457.0], [18.5, 457.0], [18.6, 457.0], [18.7, 457.0], [18.8, 457.0], [18.9, 457.0], [19.0, 458.0], [19.1, 458.0], [19.2, 458.0], [19.3, 458.0], [19.4, 458.0], [19.5, 458.0], [19.6, 458.0], [19.7, 459.0], [19.8, 459.0], [19.9, 459.0], [20.0, 459.0], [20.1, 459.0], [20.2, 459.0], [20.3, 460.0], [20.4, 460.0], [20.5, 460.0], [20.6, 460.0], [20.7, 460.0], [20.8, 460.0], [20.9, 461.0], [21.0, 461.0], [21.1, 461.0], [21.2, 461.0], [21.3, 461.0], [21.4, 461.0], [21.5, 462.0], [21.6, 462.0], [21.7, 462.0], [21.8, 462.0], [21.9, 462.0], [22.0, 462.0], [22.1, 462.0], [22.2, 463.0], [22.3, 463.0], [22.4, 463.0], [22.5, 463.0], [22.6, 463.0], [22.7, 463.0], [22.8, 463.0], [22.9, 463.0], [23.0, 463.0], [23.1, 464.0], [23.2, 464.0], [23.3, 464.0], [23.4, 464.0], [23.5, 464.0], [23.6, 464.0], [23.7, 464.0], [23.8, 464.0], [23.9, 465.0], [24.0, 465.0], [24.1, 465.0], [24.2, 465.0], [24.3, 465.0], [24.4, 465.0], [24.5, 465.0], [24.6, 465.0], [24.7, 466.0], [24.8, 466.0], [24.9, 466.0], [25.0, 466.0], [25.1, 466.0], [25.2, 466.0], [25.3, 467.0], [25.4, 467.0], [25.5, 467.0], [25.6, 467.0], [25.7, 467.0], [25.8, 467.0], [25.9, 467.0], [26.0, 467.0], [26.1, 468.0], [26.2, 468.0], [26.3, 468.0], [26.4, 468.0], [26.5, 469.0], [26.6, 469.0], [26.7, 469.0], [26.8, 469.0], [26.9, 469.0], [27.0, 470.0], [27.1, 470.0], [27.2, 470.0], [27.3, 470.0], [27.4, 470.0], [27.5, 470.0], [27.6, 470.0], [27.7, 470.0], [27.8, 471.0], [27.9, 471.0], [28.0, 471.0], [28.1, 471.0], [28.2, 471.0], [28.3, 471.0], [28.4, 472.0], [28.5, 472.0], [28.6, 472.0], [28.7, 472.0], [28.8, 472.0], [28.9, 472.0], [29.0, 472.0], [29.1, 473.0], [29.2, 473.0], [29.3, 473.0], [29.4, 473.0], [29.5, 473.0], [29.6, 473.0], [29.7, 473.0], [29.8, 474.0], [29.9, 474.0], [30.0, 474.0], [30.1, 474.0], [30.2, 474.0], [30.3, 474.0], [30.4, 474.0], [30.5, 474.0], [30.6, 475.0], [30.7, 475.0], [30.8, 475.0], [30.9, 475.0], [31.0, 475.0], [31.1, 475.0], [31.2, 475.0], [31.3, 475.0], [31.4, 475.0], [31.5, 476.0], [31.6, 476.0], [31.7, 476.0], [31.8, 476.0], [31.9, 476.0], [32.0, 476.0], [32.1, 477.0], [32.2, 477.0], [32.3, 477.0], [32.4, 477.0], [32.5, 477.0], [32.6, 477.0], [32.7, 477.0], [32.8, 478.0], [32.9, 478.0], [33.0, 478.0], [33.1, 478.0], [33.2, 478.0], [33.3, 478.0], [33.4, 479.0], [33.5, 479.0], [33.6, 479.0], [33.7, 479.0], [33.8, 479.0], [33.9, 479.0], [34.0, 480.0], [34.1, 480.0], [34.2, 480.0], [34.3, 480.0], [34.4, 480.0], [34.5, 480.0], [34.6, 480.0], [34.7, 480.0], [34.8, 481.0], [34.9, 481.0], [35.0, 481.0], [35.1, 481.0], [35.2, 481.0], [35.3, 481.0], [35.4, 481.0], [35.5, 481.0], [35.6, 481.0], [35.7, 481.0], [35.8, 482.0], [35.9, 482.0], [36.0, 482.0], [36.1, 482.0], [36.2, 482.0], [36.3, 482.0], [36.4, 483.0], [36.5, 483.0], [36.6, 483.0], [36.7, 483.0], [36.8, 483.0], [36.9, 483.0], [37.0, 483.0], [37.1, 483.0], [37.2, 484.0], [37.3, 484.0], [37.4, 484.0], [37.5, 484.0], [37.6, 484.0], [37.7, 484.0], [37.8, 485.0], [37.9, 485.0], [38.0, 485.0], [38.1, 485.0], [38.2, 485.0], [38.3, 485.0], [38.4, 485.0], [38.5, 485.0], [38.6, 486.0], [38.7, 486.0], [38.8, 486.0], [38.9, 486.0], [39.0, 486.0], [39.1, 486.0], [39.2, 486.0], [39.3, 486.0], [39.4, 487.0], [39.5, 487.0], [39.6, 487.0], [39.7, 487.0], [39.8, 488.0], [39.9, 488.0], [40.0, 488.0], [40.1, 488.0], [40.2, 488.0], [40.3, 488.0], [40.4, 489.0], [40.5, 489.0], [40.6, 489.0], [40.7, 489.0], [40.8, 489.0], [40.9, 490.0], [41.0, 490.0], [41.1, 490.0], [41.2, 490.0], [41.3, 490.0], [41.4, 491.0], [41.5, 491.0], [41.6, 491.0], [41.7, 491.0], [41.8, 491.0], [41.9, 491.0], [42.0, 491.0], [42.1, 491.0], [42.2, 492.0], [42.3, 492.0], [42.4, 492.0], [42.5, 492.0], [42.6, 492.0], [42.7, 492.0], [42.8, 493.0], [42.9, 493.0], [43.0, 493.0], [43.1, 493.0], [43.2, 493.0], [43.3, 493.0], [43.4, 494.0], [43.5, 494.0], [43.6, 494.0], [43.7, 494.0], [43.8, 494.0], [43.9, 494.0], [44.0, 494.0], [44.1, 495.0], [44.2, 495.0], [44.3, 495.0], [44.4, 495.0], [44.5, 495.0], [44.6, 495.0], [44.7, 495.0], [44.8, 496.0], [44.9, 496.0], [45.0, 496.0], [45.1, 496.0], [45.2, 496.0], [45.3, 496.0], [45.4, 497.0], [45.5, 497.0], [45.6, 497.0], [45.7, 497.0], [45.8, 497.0], [45.9, 497.0], [46.0, 498.0], [46.1, 498.0], [46.2, 498.0], [46.3, 498.0], [46.4, 498.0], [46.5, 498.0], [46.6, 499.0], [46.7, 499.0], [46.8, 499.0], [46.9, 499.0], [47.0, 499.0], [47.1, 499.0], [47.2, 499.0], [47.3, 500.0], [47.4, 500.0], [47.5, 500.0], [47.6, 500.0], [47.7, 501.0], [47.8, 501.0], [47.9, 501.0], [48.0, 501.0], [48.1, 501.0], [48.2, 501.0], [48.3, 502.0], [48.4, 502.0], [48.5, 502.0], [48.6, 502.0], [48.7, 502.0], [48.8, 502.0], [48.9, 503.0], [49.0, 503.0], [49.1, 503.0], [49.2, 503.0], [49.3, 503.0], [49.4, 504.0], [49.5, 504.0], [49.6, 504.0], [49.7, 504.0], [49.8, 504.0], [49.9, 505.0], [50.0, 505.0], [50.1, 505.0], [50.2, 505.0], [50.3, 505.0], [50.4, 505.0], [50.5, 506.0], [50.6, 506.0], [50.7, 506.0], [50.8, 506.0], [50.9, 506.0], [51.0, 506.0], [51.1, 507.0], [51.2, 507.0], [51.3, 507.0], [51.4, 508.0], [51.5, 508.0], [51.6, 508.0], [51.7, 508.0], [51.8, 509.0], [51.9, 509.0], [52.0, 509.0], [52.1, 509.0], [52.2, 509.0], [52.3, 510.0], [52.4, 510.0], [52.5, 510.0], [52.6, 510.0], [52.7, 510.0], [52.8, 510.0], [52.9, 511.0], [53.0, 511.0], [53.1, 511.0], [53.2, 511.0], [53.3, 511.0], [53.4, 511.0], [53.5, 512.0], [53.6, 512.0], [53.7, 512.0], [53.8, 512.0], [53.9, 513.0], [54.0, 513.0], [54.1, 513.0], [54.2, 513.0], [54.3, 513.0], [54.4, 514.0], [54.5, 514.0], [54.6, 514.0], [54.7, 514.0], [54.8, 514.0], [54.9, 514.0], [55.0, 515.0], [55.1, 515.0], [55.2, 515.0], [55.3, 515.0], [55.4, 516.0], [55.5, 516.0], [55.6, 516.0], [55.7, 516.0], [55.8, 516.0], [55.9, 517.0], [56.0, 517.0], [56.1, 517.0], [56.2, 517.0], [56.3, 517.0], [56.4, 518.0], [56.5, 518.0], [56.6, 518.0], [56.7, 518.0], [56.8, 519.0], [56.9, 519.0], [57.0, 519.0], [57.1, 520.0], [57.2, 520.0], [57.3, 520.0], [57.4, 520.0], [57.5, 520.0], [57.6, 520.0], [57.7, 521.0], [57.8, 521.0], [57.9, 521.0], [58.0, 521.0], [58.1, 522.0], [58.2, 522.0], [58.3, 523.0], [58.4, 523.0], [58.5, 523.0], [58.6, 523.0], [58.7, 523.0], [58.8, 523.0], [58.9, 523.0], [59.0, 523.0], [59.1, 524.0], [59.2, 524.0], [59.3, 524.0], [59.4, 524.0], [59.5, 524.0], [59.6, 525.0], [59.7, 525.0], [59.8, 525.0], [59.9, 525.0], [60.0, 525.0], [60.1, 525.0], [60.2, 525.0], [60.3, 526.0], [60.4, 526.0], [60.5, 526.0], [60.6, 527.0], [60.7, 527.0], [60.8, 527.0], [60.9, 527.0], [61.0, 528.0], [61.1, 528.0], [61.2, 528.0], [61.3, 528.0], [61.4, 529.0], [61.5, 529.0], [61.6, 529.0], [61.7, 529.0], [61.8, 530.0], [61.9, 530.0], [62.0, 530.0], [62.1, 530.0], [62.2, 530.0], [62.3, 531.0], [62.4, 531.0], [62.5, 531.0], [62.6, 532.0], [62.7, 532.0], [62.8, 532.0], [62.9, 532.0], [63.0, 533.0], [63.1, 533.0], [63.2, 533.0], [63.3, 533.0], [63.4, 533.0], [63.5, 534.0], [63.6, 534.0], [63.7, 534.0], [63.8, 535.0], [63.9, 535.0], [64.0, 535.0], [64.1, 535.0], [64.2, 536.0], [64.3, 536.0], [64.4, 536.0], [64.5, 536.0], [64.6, 537.0], [64.7, 537.0], [64.8, 538.0], [64.9, 538.0], [65.0, 538.0], [65.1, 539.0], [65.2, 539.0], [65.3, 539.0], [65.4, 540.0], [65.5, 540.0], [65.6, 540.0], [65.7, 541.0], [65.8, 541.0], [65.9, 541.0], [66.0, 542.0], [66.1, 542.0], [66.2, 542.0], [66.3, 542.0], [66.4, 543.0], [66.5, 543.0], [66.6, 543.0], [66.7, 543.0], [66.8, 544.0], [66.9, 544.0], [67.0, 544.0], [67.1, 545.0], [67.2, 545.0], [67.3, 546.0], [67.4, 546.0], [67.5, 546.0], [67.6, 546.0], [67.7, 547.0], [67.8, 547.0], [67.9, 547.0], [68.0, 547.0], [68.1, 547.0], [68.2, 547.0], [68.3, 548.0], [68.4, 548.0], [68.5, 548.0], [68.6, 549.0], [68.7, 549.0], [68.8, 549.0], [68.9, 549.0], [69.0, 550.0], [69.1, 550.0], [69.2, 550.0], [69.3, 550.0], [69.4, 551.0], [69.5, 551.0], [69.6, 551.0], [69.7, 552.0], [69.8, 552.0], [69.9, 552.0], [70.0, 553.0], [70.1, 553.0], [70.2, 553.0], [70.3, 554.0], [70.4, 554.0], [70.5, 554.0], [70.6, 554.0], [70.7, 555.0], [70.8, 555.0], [70.9, 555.0], [71.0, 555.0], [71.1, 556.0], [71.2, 556.0], [71.3, 556.0], [71.4, 557.0], [71.5, 557.0], [71.6, 557.0], [71.7, 558.0], [71.8, 558.0], [71.9, 558.0], [72.0, 558.0], [72.1, 559.0], [72.2, 559.0], [72.3, 559.0], [72.4, 560.0], [72.5, 560.0], [72.6, 560.0], [72.7, 561.0], [72.8, 561.0], [72.9, 561.0], [73.0, 562.0], [73.1, 562.0], [73.2, 562.0], [73.3, 562.0], [73.4, 563.0], [73.5, 563.0], [73.6, 563.0], [73.7, 563.0], [73.8, 564.0], [73.9, 564.0], [74.0, 564.0], [74.1, 565.0], [74.2, 565.0], [74.3, 565.0], [74.4, 565.0], [74.5, 566.0], [74.6, 566.0], [74.7, 567.0], [74.8, 567.0], [74.9, 567.0], [75.0, 568.0], [75.1, 568.0], [75.2, 568.0], [75.3, 568.0], [75.4, 568.0], [75.5, 569.0], [75.6, 569.0], [75.7, 569.0], [75.8, 570.0], [75.9, 571.0], [76.0, 572.0], [76.1, 572.0], [76.2, 573.0], [76.3, 573.0], [76.4, 573.0], [76.5, 574.0], [76.6, 574.0], [76.7, 575.0], [76.8, 575.0], [76.9, 575.0], [77.0, 576.0], [77.1, 576.0], [77.2, 576.0], [77.3, 577.0], [77.4, 577.0], [77.5, 578.0], [77.6, 578.0], [77.7, 579.0], [77.8, 579.0], [77.9, 579.0], [78.0, 580.0], [78.1, 580.0], [78.2, 580.0], [78.3, 581.0], [78.4, 581.0], [78.5, 582.0], [78.6, 582.0], [78.7, 583.0], [78.8, 583.0], [78.9, 583.0], [79.0, 583.0], [79.1, 584.0], [79.2, 584.0], [79.3, 585.0], [79.4, 585.0], [79.5, 586.0], [79.6, 586.0], [79.7, 587.0], [79.8, 587.0], [79.9, 588.0], [80.0, 588.0], [80.1, 588.0], [80.2, 589.0], [80.3, 589.0], [80.4, 589.0], [80.5, 590.0], [80.6, 590.0], [80.7, 591.0], [80.8, 591.0], [80.9, 592.0], [81.0, 592.0], [81.1, 592.0], [81.2, 592.0], [81.3, 593.0], [81.4, 593.0], [81.5, 594.0], [81.6, 594.0], [81.7, 595.0], [81.8, 595.0], [81.9, 596.0], [82.0, 596.0], [82.1, 596.0], [82.2, 597.0], [82.3, 597.0], [82.4, 598.0], [82.5, 599.0], [82.6, 599.0], [82.7, 599.0], [82.8, 600.0], [82.9, 600.0], [83.0, 600.0], [83.1, 601.0], [83.2, 601.0], [83.3, 601.0], [83.4, 602.0], [83.5, 602.0], [83.6, 602.0], [83.7, 603.0], [83.8, 603.0], [83.9, 604.0], [84.0, 604.0], [84.1, 604.0], [84.2, 605.0], [84.3, 606.0], [84.4, 606.0], [84.5, 606.0], [84.6, 607.0], [84.7, 607.0], [84.8, 607.0], [84.9, 608.0], [85.0, 608.0], [85.1, 609.0], [85.2, 609.0], [85.3, 609.0], [85.4, 610.0], [85.5, 610.0], [85.6, 610.0], [85.7, 611.0], [85.8, 611.0], [85.9, 611.0], [86.0, 612.0], [86.1, 613.0], [86.2, 613.0], [86.3, 613.0], [86.4, 613.0], [86.5, 614.0], [86.6, 614.0], [86.7, 614.0], [86.8, 615.0], [86.9, 616.0], [87.0, 617.0], [87.1, 617.0], [87.2, 618.0], [87.3, 618.0], [87.4, 619.0], [87.5, 619.0], [87.6, 620.0], [87.7, 620.0], [87.8, 621.0], [87.9, 622.0], [88.0, 622.0], [88.1, 623.0], [88.2, 623.0], [88.3, 624.0], [88.4, 624.0], [88.5, 625.0], [88.6, 625.0], [88.7, 626.0], [88.8, 627.0], [88.9, 628.0], [89.0, 629.0], [89.1, 630.0], [89.2, 630.0], [89.3, 631.0], [89.4, 631.0], [89.5, 632.0], [89.6, 632.0], [89.7, 633.0], [89.8, 633.0], [89.9, 634.0], [90.0, 635.0], [90.1, 635.0], [90.2, 636.0], [90.3, 637.0], [90.4, 637.0], [90.5, 637.0], [90.6, 638.0], [90.7, 639.0], [90.8, 640.0], [90.9, 640.0], [91.0, 640.0], [91.1, 641.0], [91.2, 641.0], [91.3, 642.0], [91.4, 643.0], [91.5, 644.0], [91.6, 644.0], [91.7, 646.0], [91.8, 647.0], [91.9, 647.0], [92.0, 648.0], [92.1, 648.0], [92.2, 649.0], [92.3, 650.0], [92.4, 650.0], [92.5, 650.0], [92.6, 651.0], [92.7, 653.0], [92.8, 654.0], [92.9, 655.0], [93.0, 656.0], [93.1, 656.0], [93.2, 658.0], [93.3, 659.0], [93.4, 660.0], [93.5, 661.0], [93.6, 662.0], [93.7, 662.0], [93.8, 664.0], [93.9, 665.0], [94.0, 666.0], [94.1, 667.0], [94.2, 669.0], [94.3, 670.0], [94.4, 672.0], [94.5, 673.0], [94.6, 675.0], [94.7, 678.0], [94.8, 679.0], [94.9, 681.0], [95.0, 682.0], [95.1, 684.0], [95.2, 685.0], [95.3, 686.0], [95.4, 688.0], [95.5, 688.0], [95.6, 691.0], [95.7, 692.0], [95.8, 695.0], [95.9, 696.0], [96.0, 697.0], [96.1, 701.0], [96.2, 702.0], [96.3, 703.0], [96.4, 707.0], [96.5, 708.0], [96.6, 711.0], [96.7, 712.0], [96.8, 714.0], [96.9, 716.0], [97.0, 719.0], [97.1, 722.0], [97.2, 727.0], [97.3, 730.0], [97.4, 738.0], [97.5, 745.0], [97.6, 751.0], [97.7, 758.0], [97.8, 766.0], [97.9, 776.0], [98.0, 784.0], [98.1, 785.0], [98.2, 791.0], [98.3, 801.0], [98.4, 803.0], [98.5, 809.0], [98.6, 814.0], [98.7, 821.0], [98.8, 824.0], [98.9, 829.0], [99.0, 837.0], [99.1, 854.0], [99.2, 865.0], [99.3, 888.0], [99.4, 899.0], [99.5, 914.0], [99.6, 962.0], [99.7, 1022.0], [99.8, 1112.0], [99.9, 1221.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 3.0, "minX": 300.0, "maxY": 2626.0, "series": [{"data": [[1100.0, 6.0], [1200.0, 3.0], [600.0, 752.0], [300.0, 50.0], [1300.0, 4.0], [700.0, 126.0], [800.0, 64.0], [400.0, 2626.0], [900.0, 15.0], [1000.0, 6.0], [500.0, 2016.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2701.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2967.0, "series": [{"data": [[0.0, 2701.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2967.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 46.93782383419691, "minX": 1.6155606E12, "maxY": 50.0, "series": [{"data": [[1.6155606E12, 50.0], [1.61556066E12, 46.93782383419691]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61556066E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 349.0, "minX": 2.0, "maxY": 602.0, "series": [{"data": [[2.0, 370.0], [35.0, 422.0], [34.0, 458.25], [36.0, 522.0], [39.0, 519.3333333333334], [41.0, 500.0], [40.0, 501.0], [43.0, 517.0], [42.0, 540.0], [45.0, 516.0], [47.0, 561.0], [49.0, 601.0], [48.0, 602.0], [50.0, 527.5086314290787], [4.0, 376.5], [5.0, 362.0], [6.0, 450.0], [7.0, 414.0], [8.0, 356.0], [9.0, 447.0], [10.0, 442.0], [11.0, 349.0], [12.0, 436.0], [20.0, 406.5], [21.0, 488.0], [22.0, 438.0], [24.0, 472.0], [25.0, 449.0], [26.0, 455.0], [27.0, 480.0], [28.0, 498.0], [30.0, 460.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[49.79146083274523, 526.9043754410712]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 759.1333333333333, "minX": 1.6155606E12, "maxY": 1864105.8333333333, "series": [{"data": [[1.6155606E12, 1864105.8333333333], [1.61556066E12, 136225.83333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6155606E12, 10387.933333333332], [1.61556066E12, 759.1333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61556066E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 524.3142748958718, "minX": 1.6155606E12, "maxY": 562.347150259067, "series": [{"data": [[1.6155606E12, 524.3142748958718], [1.61556066E12, 562.347150259067]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61556066E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 523.8174933737232, "minX": 1.6155606E12, "maxY": 561.805699481865, "series": [{"data": [[1.6155606E12, 523.8174933737232], [1.61556066E12, 561.805699481865]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61556066E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.6155606E12, "maxY": 3.755774327906088, "series": [{"data": [[1.6155606E12, 3.755774327906088], [1.61556066E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61556066E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 344.0, "minX": 1.6155606E12, "maxY": 1391.0, "series": [{"data": [[1.6155606E12, 1391.0], [1.61556066E12, 789.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6155606E12, 630.0], [1.61556066E12, 663.9000000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6155606E12, 849.8500000000004], [1.61556066E12, 751.43]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6155606E12, 679.8499999999995], [1.61556066E12, 694.3]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6155606E12, 351.0], [1.61556066E12, 344.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6155606E12, 501.0], [1.61556066E12, 559.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61556066E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 439.5, "minX": 36.0, "maxY": 800.5, "series": [{"data": [[36.0, 439.5], [60.0, 800.5], [73.0, 610.0], [76.0, 620.5], [77.0, 660.0], [79.0, 599.0], [78.0, 689.5], [81.0, 505.0], [80.0, 611.0], [82.0, 618.0], [86.0, 586.5], [85.0, 590.0], [84.0, 579.0], [91.0, 545.0], [88.0, 543.0], [90.0, 515.0], [92.0, 543.5], [94.0, 561.0], [93.0, 531.0], [97.0, 491.0], [99.0, 524.0], [96.0, 498.0], [98.0, 533.0], [100.0, 489.5], [102.0, 483.0], [105.0, 486.5], [107.0, 483.0], [106.0, 471.0], [104.0, 496.5], [108.0, 462.0], [110.0, 452.5], [111.0, 454.0], [109.0, 480.0], [117.0, 452.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 117.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 439.5, "minX": 36.0, "maxY": 800.0, "series": [{"data": [[36.0, 439.5], [60.0, 800.0], [73.0, 609.0], [76.0, 620.0], [77.0, 659.5], [79.0, 598.0], [78.0, 689.5], [81.0, 505.0], [80.0, 611.0], [82.0, 617.5], [86.0, 586.0], [85.0, 590.0], [84.0, 578.5], [91.0, 544.0], [88.0, 542.5], [90.0, 514.0], [92.0, 543.0], [94.0, 560.5], [93.0, 530.0], [97.0, 491.0], [99.0, 524.0], [96.0, 498.0], [98.0, 532.5], [100.0, 489.5], [102.0, 482.0], [105.0, 486.0], [107.0, 483.0], [106.0, 471.0], [104.0, 496.0], [108.0, 461.5], [110.0, 452.0], [111.0, 454.0], [109.0, 480.0], [117.0, 451.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 117.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.6, "minX": 1.6155606E12, "maxY": 88.86666666666666, "series": [{"data": [[1.6155606E12, 88.86666666666666], [1.61556066E12, 5.6]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61556066E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.433333333333334, "minX": 1.6155606E12, "maxY": 88.03333333333333, "series": [{"data": [[1.6155606E12, 88.03333333333333], [1.61556066E12, 6.433333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61556066E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.433333333333334, "minX": 1.6155606E12, "maxY": 88.03333333333333, "series": [{"data": [[1.6155606E12, 88.03333333333333], [1.61556066E12, 6.433333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61556066E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.433333333333334, "minX": 1.6155606E12, "maxY": 88.03333333333333, "series": [{"data": [[1.6155606E12, 88.03333333333333], [1.61556066E12, 6.433333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61556066E12, "title": "Total Transactions Per Second"}},
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

