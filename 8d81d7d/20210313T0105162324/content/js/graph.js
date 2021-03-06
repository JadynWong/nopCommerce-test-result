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
        data: {"result": {"minY": 260.0, "minX": 0.0, "maxY": 1409.0, "series": [{"data": [[0.0, 260.0], [0.1, 282.0], [0.2, 304.0], [0.3, 306.0], [0.4, 320.0], [0.5, 325.0], [0.6, 328.0], [0.7, 332.0], [0.8, 336.0], [0.9, 341.0], [1.0, 343.0], [1.1, 345.0], [1.2, 351.0], [1.3, 353.0], [1.4, 357.0], [1.5, 359.0], [1.6, 360.0], [1.7, 363.0], [1.8, 365.0], [1.9, 367.0], [2.0, 369.0], [2.1, 371.0], [2.2, 372.0], [2.3, 375.0], [2.4, 376.0], [2.5, 378.0], [2.6, 380.0], [2.7, 381.0], [2.8, 382.0], [2.9, 383.0], [3.0, 384.0], [3.1, 386.0], [3.2, 388.0], [3.3, 389.0], [3.4, 391.0], [3.5, 392.0], [3.6, 393.0], [3.7, 395.0], [3.8, 396.0], [3.9, 397.0], [4.0, 398.0], [4.1, 399.0], [4.2, 399.0], [4.3, 400.0], [4.4, 402.0], [4.5, 402.0], [4.6, 404.0], [4.7, 404.0], [4.8, 405.0], [4.9, 406.0], [5.0, 407.0], [5.1, 407.0], [5.2, 408.0], [5.3, 409.0], [5.4, 410.0], [5.5, 410.0], [5.6, 411.0], [5.7, 412.0], [5.8, 413.0], [5.9, 414.0], [6.0, 415.0], [6.1, 415.0], [6.2, 416.0], [6.3, 417.0], [6.4, 418.0], [6.5, 419.0], [6.6, 419.0], [6.7, 420.0], [6.8, 420.0], [6.9, 421.0], [7.0, 422.0], [7.1, 423.0], [7.2, 424.0], [7.3, 424.0], [7.4, 424.0], [7.5, 425.0], [7.6, 426.0], [7.7, 427.0], [7.8, 427.0], [7.9, 427.0], [8.0, 428.0], [8.1, 428.0], [8.2, 429.0], [8.3, 430.0], [8.4, 431.0], [8.5, 431.0], [8.6, 432.0], [8.7, 432.0], [8.8, 433.0], [8.9, 433.0], [9.0, 435.0], [9.1, 435.0], [9.2, 436.0], [9.3, 436.0], [9.4, 437.0], [9.5, 437.0], [9.6, 438.0], [9.7, 438.0], [9.8, 439.0], [9.9, 439.0], [10.0, 440.0], [10.1, 440.0], [10.2, 441.0], [10.3, 442.0], [10.4, 442.0], [10.5, 443.0], [10.6, 444.0], [10.7, 444.0], [10.8, 445.0], [10.9, 445.0], [11.0, 445.0], [11.1, 446.0], [11.2, 446.0], [11.3, 447.0], [11.4, 447.0], [11.5, 448.0], [11.6, 448.0], [11.7, 449.0], [11.8, 449.0], [11.9, 450.0], [12.0, 450.0], [12.1, 451.0], [12.2, 452.0], [12.3, 452.0], [12.4, 453.0], [12.5, 453.0], [12.6, 453.0], [12.7, 454.0], [12.8, 454.0], [12.9, 455.0], [13.0, 455.0], [13.1, 455.0], [13.2, 455.0], [13.3, 455.0], [13.4, 456.0], [13.5, 456.0], [13.6, 457.0], [13.7, 457.0], [13.8, 458.0], [13.9, 458.0], [14.0, 459.0], [14.1, 459.0], [14.2, 460.0], [14.3, 460.0], [14.4, 461.0], [14.5, 461.0], [14.6, 462.0], [14.7, 462.0], [14.8, 462.0], [14.9, 462.0], [15.0, 463.0], [15.1, 464.0], [15.2, 464.0], [15.3, 464.0], [15.4, 465.0], [15.5, 465.0], [15.6, 466.0], [15.7, 466.0], [15.8, 467.0], [15.9, 467.0], [16.0, 467.0], [16.1, 467.0], [16.2, 468.0], [16.3, 468.0], [16.4, 469.0], [16.5, 469.0], [16.6, 469.0], [16.7, 470.0], [16.8, 470.0], [16.9, 471.0], [17.0, 471.0], [17.1, 471.0], [17.2, 472.0], [17.3, 472.0], [17.4, 473.0], [17.5, 473.0], [17.6, 474.0], [17.7, 474.0], [17.8, 474.0], [17.9, 474.0], [18.0, 474.0], [18.1, 475.0], [18.2, 475.0], [18.3, 475.0], [18.4, 476.0], [18.5, 476.0], [18.6, 476.0], [18.7, 477.0], [18.8, 477.0], [18.9, 477.0], [19.0, 478.0], [19.1, 478.0], [19.2, 478.0], [19.3, 478.0], [19.4, 479.0], [19.5, 479.0], [19.6, 479.0], [19.7, 479.0], [19.8, 480.0], [19.9, 480.0], [20.0, 480.0], [20.1, 481.0], [20.2, 481.0], [20.3, 481.0], [20.4, 482.0], [20.5, 482.0], [20.6, 483.0], [20.7, 483.0], [20.8, 483.0], [20.9, 483.0], [21.0, 484.0], [21.1, 484.0], [21.2, 485.0], [21.3, 485.0], [21.4, 486.0], [21.5, 486.0], [21.6, 486.0], [21.7, 487.0], [21.8, 487.0], [21.9, 487.0], [22.0, 488.0], [22.1, 488.0], [22.2, 488.0], [22.3, 489.0], [22.4, 489.0], [22.5, 489.0], [22.6, 490.0], [22.7, 490.0], [22.8, 490.0], [22.9, 490.0], [23.0, 491.0], [23.1, 491.0], [23.2, 491.0], [23.3, 492.0], [23.4, 492.0], [23.5, 493.0], [23.6, 493.0], [23.7, 493.0], [23.8, 494.0], [23.9, 494.0], [24.0, 495.0], [24.1, 495.0], [24.2, 495.0], [24.3, 496.0], [24.4, 496.0], [24.5, 497.0], [24.6, 497.0], [24.7, 497.0], [24.8, 498.0], [24.9, 498.0], [25.0, 499.0], [25.1, 499.0], [25.2, 499.0], [25.3, 500.0], [25.4, 500.0], [25.5, 500.0], [25.6, 501.0], [25.7, 501.0], [25.8, 502.0], [25.9, 502.0], [26.0, 503.0], [26.1, 503.0], [26.2, 504.0], [26.3, 504.0], [26.4, 505.0], [26.5, 505.0], [26.6, 505.0], [26.7, 506.0], [26.8, 506.0], [26.9, 506.0], [27.0, 507.0], [27.1, 507.0], [27.2, 507.0], [27.3, 507.0], [27.4, 508.0], [27.5, 508.0], [27.6, 508.0], [27.7, 509.0], [27.8, 509.0], [27.9, 509.0], [28.0, 510.0], [28.1, 510.0], [28.2, 510.0], [28.3, 510.0], [28.4, 511.0], [28.5, 511.0], [28.6, 511.0], [28.7, 512.0], [28.8, 512.0], [28.9, 513.0], [29.0, 513.0], [29.1, 513.0], [29.2, 513.0], [29.3, 514.0], [29.4, 514.0], [29.5, 514.0], [29.6, 514.0], [29.7, 514.0], [29.8, 515.0], [29.9, 515.0], [30.0, 515.0], [30.1, 516.0], [30.2, 516.0], [30.3, 516.0], [30.4, 517.0], [30.5, 517.0], [30.6, 517.0], [30.7, 518.0], [30.8, 518.0], [30.9, 519.0], [31.0, 519.0], [31.1, 519.0], [31.2, 520.0], [31.3, 520.0], [31.4, 520.0], [31.5, 520.0], [31.6, 521.0], [31.7, 521.0], [31.8, 521.0], [31.9, 521.0], [32.0, 522.0], [32.1, 522.0], [32.2, 522.0], [32.3, 523.0], [32.4, 523.0], [32.5, 523.0], [32.6, 523.0], [32.7, 524.0], [32.8, 524.0], [32.9, 525.0], [33.0, 525.0], [33.1, 525.0], [33.2, 526.0], [33.3, 526.0], [33.4, 526.0], [33.5, 526.0], [33.6, 527.0], [33.7, 527.0], [33.8, 527.0], [33.9, 528.0], [34.0, 528.0], [34.1, 528.0], [34.2, 528.0], [34.3, 529.0], [34.4, 529.0], [34.5, 529.0], [34.6, 530.0], [34.7, 530.0], [34.8, 530.0], [34.9, 531.0], [35.0, 531.0], [35.1, 531.0], [35.2, 532.0], [35.3, 532.0], [35.4, 532.0], [35.5, 533.0], [35.6, 533.0], [35.7, 534.0], [35.8, 534.0], [35.9, 535.0], [36.0, 535.0], [36.1, 535.0], [36.2, 535.0], [36.3, 536.0], [36.4, 536.0], [36.5, 537.0], [36.6, 537.0], [36.7, 537.0], [36.8, 537.0], [36.9, 538.0], [37.0, 538.0], [37.1, 538.0], [37.2, 539.0], [37.3, 539.0], [37.4, 539.0], [37.5, 539.0], [37.6, 540.0], [37.7, 540.0], [37.8, 540.0], [37.9, 541.0], [38.0, 541.0], [38.1, 541.0], [38.2, 542.0], [38.3, 542.0], [38.4, 542.0], [38.5, 542.0], [38.6, 542.0], [38.7, 543.0], [38.8, 543.0], [38.9, 543.0], [39.0, 544.0], [39.1, 544.0], [39.2, 544.0], [39.3, 545.0], [39.4, 545.0], [39.5, 545.0], [39.6, 545.0], [39.7, 546.0], [39.8, 546.0], [39.9, 546.0], [40.0, 547.0], [40.1, 547.0], [40.2, 547.0], [40.3, 547.0], [40.4, 548.0], [40.5, 548.0], [40.6, 548.0], [40.7, 548.0], [40.8, 548.0], [40.9, 549.0], [41.0, 549.0], [41.1, 549.0], [41.2, 550.0], [41.3, 550.0], [41.4, 550.0], [41.5, 550.0], [41.6, 551.0], [41.7, 551.0], [41.8, 551.0], [41.9, 551.0], [42.0, 552.0], [42.1, 552.0], [42.2, 552.0], [42.3, 552.0], [42.4, 552.0], [42.5, 553.0], [42.6, 553.0], [42.7, 553.0], [42.8, 553.0], [42.9, 553.0], [43.0, 554.0], [43.1, 554.0], [43.2, 554.0], [43.3, 554.0], [43.4, 554.0], [43.5, 555.0], [43.6, 555.0], [43.7, 555.0], [43.8, 555.0], [43.9, 556.0], [44.0, 556.0], [44.1, 556.0], [44.2, 557.0], [44.3, 557.0], [44.4, 557.0], [44.5, 557.0], [44.6, 557.0], [44.7, 558.0], [44.8, 558.0], [44.9, 558.0], [45.0, 558.0], [45.1, 558.0], [45.2, 559.0], [45.3, 559.0], [45.4, 559.0], [45.5, 560.0], [45.6, 560.0], [45.7, 560.0], [45.8, 561.0], [45.9, 561.0], [46.0, 561.0], [46.1, 561.0], [46.2, 561.0], [46.3, 561.0], [46.4, 562.0], [46.5, 562.0], [46.6, 562.0], [46.7, 562.0], [46.8, 563.0], [46.9, 563.0], [47.0, 563.0], [47.1, 563.0], [47.2, 564.0], [47.3, 564.0], [47.4, 564.0], [47.5, 564.0], [47.6, 565.0], [47.7, 565.0], [47.8, 565.0], [47.9, 565.0], [48.0, 565.0], [48.1, 565.0], [48.2, 566.0], [48.3, 566.0], [48.4, 567.0], [48.5, 567.0], [48.6, 567.0], [48.7, 568.0], [48.8, 568.0], [48.9, 568.0], [49.0, 568.0], [49.1, 569.0], [49.2, 569.0], [49.3, 569.0], [49.4, 569.0], [49.5, 569.0], [49.6, 569.0], [49.7, 570.0], [49.8, 570.0], [49.9, 570.0], [50.0, 571.0], [50.1, 571.0], [50.2, 571.0], [50.3, 571.0], [50.4, 571.0], [50.5, 572.0], [50.6, 572.0], [50.7, 572.0], [50.8, 573.0], [50.9, 573.0], [51.0, 574.0], [51.1, 574.0], [51.2, 574.0], [51.3, 574.0], [51.4, 575.0], [51.5, 575.0], [51.6, 576.0], [51.7, 576.0], [51.8, 576.0], [51.9, 577.0], [52.0, 577.0], [52.1, 577.0], [52.2, 578.0], [52.3, 578.0], [52.4, 579.0], [52.5, 579.0], [52.6, 580.0], [52.7, 580.0], [52.8, 580.0], [52.9, 581.0], [53.0, 581.0], [53.1, 581.0], [53.2, 582.0], [53.3, 582.0], [53.4, 582.0], [53.5, 582.0], [53.6, 583.0], [53.7, 583.0], [53.8, 583.0], [53.9, 584.0], [54.0, 584.0], [54.1, 584.0], [54.2, 585.0], [54.3, 585.0], [54.4, 585.0], [54.5, 585.0], [54.6, 586.0], [54.7, 586.0], [54.8, 587.0], [54.9, 587.0], [55.0, 587.0], [55.1, 587.0], [55.2, 588.0], [55.3, 588.0], [55.4, 588.0], [55.5, 588.0], [55.6, 589.0], [55.7, 589.0], [55.8, 589.0], [55.9, 590.0], [56.0, 590.0], [56.1, 590.0], [56.2, 590.0], [56.3, 591.0], [56.4, 591.0], [56.5, 591.0], [56.6, 592.0], [56.7, 592.0], [56.8, 592.0], [56.9, 592.0], [57.0, 592.0], [57.1, 593.0], [57.2, 593.0], [57.3, 593.0], [57.4, 594.0], [57.5, 594.0], [57.6, 594.0], [57.7, 594.0], [57.8, 595.0], [57.9, 595.0], [58.0, 595.0], [58.1, 595.0], [58.2, 596.0], [58.3, 596.0], [58.4, 597.0], [58.5, 597.0], [58.6, 597.0], [58.7, 597.0], [58.8, 598.0], [58.9, 598.0], [59.0, 598.0], [59.1, 598.0], [59.2, 599.0], [59.3, 599.0], [59.4, 599.0], [59.5, 600.0], [59.6, 600.0], [59.7, 600.0], [59.8, 601.0], [59.9, 601.0], [60.0, 601.0], [60.1, 601.0], [60.2, 601.0], [60.3, 602.0], [60.4, 602.0], [60.5, 602.0], [60.6, 603.0], [60.7, 603.0], [60.8, 603.0], [60.9, 604.0], [61.0, 604.0], [61.1, 604.0], [61.2, 605.0], [61.3, 605.0], [61.4, 605.0], [61.5, 606.0], [61.6, 606.0], [61.7, 606.0], [61.8, 607.0], [61.9, 607.0], [62.0, 607.0], [62.1, 607.0], [62.2, 607.0], [62.3, 608.0], [62.4, 608.0], [62.5, 609.0], [62.6, 609.0], [62.7, 609.0], [62.8, 610.0], [62.9, 610.0], [63.0, 611.0], [63.1, 611.0], [63.2, 611.0], [63.3, 612.0], [63.4, 612.0], [63.5, 613.0], [63.6, 613.0], [63.7, 613.0], [63.8, 613.0], [63.9, 614.0], [64.0, 614.0], [64.1, 614.0], [64.2, 615.0], [64.3, 615.0], [64.4, 615.0], [64.5, 615.0], [64.6, 616.0], [64.7, 616.0], [64.8, 616.0], [64.9, 616.0], [65.0, 617.0], [65.1, 617.0], [65.2, 617.0], [65.3, 617.0], [65.4, 618.0], [65.5, 618.0], [65.6, 619.0], [65.7, 619.0], [65.8, 619.0], [65.9, 619.0], [66.0, 619.0], [66.1, 619.0], [66.2, 620.0], [66.3, 620.0], [66.4, 620.0], [66.5, 620.0], [66.6, 621.0], [66.7, 621.0], [66.8, 621.0], [66.9, 622.0], [67.0, 622.0], [67.1, 622.0], [67.2, 623.0], [67.3, 623.0], [67.4, 623.0], [67.5, 623.0], [67.6, 624.0], [67.7, 624.0], [67.8, 624.0], [67.9, 625.0], [68.0, 625.0], [68.1, 626.0], [68.2, 626.0], [68.3, 626.0], [68.4, 627.0], [68.5, 627.0], [68.6, 627.0], [68.7, 628.0], [68.8, 628.0], [68.9, 628.0], [69.0, 628.0], [69.1, 628.0], [69.2, 629.0], [69.3, 629.0], [69.4, 629.0], [69.5, 630.0], [69.6, 630.0], [69.7, 630.0], [69.8, 630.0], [69.9, 631.0], [70.0, 631.0], [70.1, 631.0], [70.2, 631.0], [70.3, 632.0], [70.4, 632.0], [70.5, 633.0], [70.6, 633.0], [70.7, 633.0], [70.8, 633.0], [70.9, 634.0], [71.0, 634.0], [71.1, 634.0], [71.2, 635.0], [71.3, 635.0], [71.4, 635.0], [71.5, 636.0], [71.6, 636.0], [71.7, 636.0], [71.8, 637.0], [71.9, 637.0], [72.0, 637.0], [72.1, 638.0], [72.2, 638.0], [72.3, 638.0], [72.4, 639.0], [72.5, 639.0], [72.6, 639.0], [72.7, 640.0], [72.8, 640.0], [72.9, 640.0], [73.0, 640.0], [73.1, 641.0], [73.2, 641.0], [73.3, 641.0], [73.4, 641.0], [73.5, 642.0], [73.6, 642.0], [73.7, 642.0], [73.8, 643.0], [73.9, 643.0], [74.0, 643.0], [74.1, 644.0], [74.2, 644.0], [74.3, 645.0], [74.4, 645.0], [74.5, 645.0], [74.6, 645.0], [74.7, 646.0], [74.8, 646.0], [74.9, 646.0], [75.0, 646.0], [75.1, 647.0], [75.2, 647.0], [75.3, 647.0], [75.4, 648.0], [75.5, 648.0], [75.6, 648.0], [75.7, 649.0], [75.8, 649.0], [75.9, 650.0], [76.0, 650.0], [76.1, 650.0], [76.2, 651.0], [76.3, 652.0], [76.4, 652.0], [76.5, 653.0], [76.6, 653.0], [76.7, 654.0], [76.8, 655.0], [76.9, 655.0], [77.0, 656.0], [77.1, 656.0], [77.2, 656.0], [77.3, 657.0], [77.4, 657.0], [77.5, 657.0], [77.6, 658.0], [77.7, 658.0], [77.8, 659.0], [77.9, 659.0], [78.0, 659.0], [78.1, 659.0], [78.2, 660.0], [78.3, 660.0], [78.4, 661.0], [78.5, 661.0], [78.6, 661.0], [78.7, 662.0], [78.8, 662.0], [78.9, 663.0], [79.0, 663.0], [79.1, 663.0], [79.2, 664.0], [79.3, 664.0], [79.4, 664.0], [79.5, 665.0], [79.6, 665.0], [79.7, 666.0], [79.8, 666.0], [79.9, 667.0], [80.0, 667.0], [80.1, 668.0], [80.2, 668.0], [80.3, 668.0], [80.4, 669.0], [80.5, 669.0], [80.6, 669.0], [80.7, 670.0], [80.8, 670.0], [80.9, 671.0], [81.0, 671.0], [81.1, 672.0], [81.2, 672.0], [81.3, 672.0], [81.4, 673.0], [81.5, 674.0], [81.6, 674.0], [81.7, 675.0], [81.8, 675.0], [81.9, 676.0], [82.0, 676.0], [82.1, 677.0], [82.2, 677.0], [82.3, 678.0], [82.4, 678.0], [82.5, 679.0], [82.6, 679.0], [82.7, 680.0], [82.8, 681.0], [82.9, 682.0], [83.0, 682.0], [83.1, 683.0], [83.2, 683.0], [83.3, 683.0], [83.4, 684.0], [83.5, 684.0], [83.6, 684.0], [83.7, 685.0], [83.8, 686.0], [83.9, 686.0], [84.0, 687.0], [84.1, 687.0], [84.2, 687.0], [84.3, 688.0], [84.4, 688.0], [84.5, 688.0], [84.6, 689.0], [84.7, 689.0], [84.8, 689.0], [84.9, 690.0], [85.0, 690.0], [85.1, 691.0], [85.2, 691.0], [85.3, 692.0], [85.4, 692.0], [85.5, 692.0], [85.6, 693.0], [85.7, 694.0], [85.8, 694.0], [85.9, 695.0], [86.0, 695.0], [86.1, 695.0], [86.2, 695.0], [86.3, 696.0], [86.4, 696.0], [86.5, 697.0], [86.6, 698.0], [86.7, 699.0], [86.8, 699.0], [86.9, 700.0], [87.0, 701.0], [87.1, 701.0], [87.2, 702.0], [87.3, 702.0], [87.4, 702.0], [87.5, 703.0], [87.6, 703.0], [87.7, 704.0], [87.8, 704.0], [87.9, 705.0], [88.0, 706.0], [88.1, 707.0], [88.2, 708.0], [88.3, 708.0], [88.4, 709.0], [88.5, 709.0], [88.6, 711.0], [88.7, 711.0], [88.8, 712.0], [88.9, 712.0], [89.0, 713.0], [89.1, 714.0], [89.2, 715.0], [89.3, 715.0], [89.4, 716.0], [89.5, 716.0], [89.6, 717.0], [89.7, 718.0], [89.8, 718.0], [89.9, 720.0], [90.0, 721.0], [90.1, 722.0], [90.2, 723.0], [90.3, 723.0], [90.4, 725.0], [90.5, 725.0], [90.6, 725.0], [90.7, 727.0], [90.8, 727.0], [90.9, 727.0], [91.0, 728.0], [91.1, 729.0], [91.2, 730.0], [91.3, 731.0], [91.4, 733.0], [91.5, 733.0], [91.6, 734.0], [91.7, 736.0], [91.8, 736.0], [91.9, 738.0], [92.0, 739.0], [92.1, 740.0], [92.2, 740.0], [92.3, 741.0], [92.4, 742.0], [92.5, 742.0], [92.6, 743.0], [92.7, 744.0], [92.8, 745.0], [92.9, 746.0], [93.0, 748.0], [93.1, 749.0], [93.2, 751.0], [93.3, 752.0], [93.4, 753.0], [93.5, 754.0], [93.6, 755.0], [93.7, 757.0], [93.8, 759.0], [93.9, 760.0], [94.0, 762.0], [94.1, 763.0], [94.2, 764.0], [94.3, 766.0], [94.4, 766.0], [94.5, 768.0], [94.6, 769.0], [94.7, 771.0], [94.8, 772.0], [94.9, 773.0], [95.0, 775.0], [95.1, 776.0], [95.2, 779.0], [95.3, 782.0], [95.4, 786.0], [95.5, 787.0], [95.6, 791.0], [95.7, 793.0], [95.8, 795.0], [95.9, 797.0], [96.0, 797.0], [96.1, 799.0], [96.2, 802.0], [96.3, 804.0], [96.4, 807.0], [96.5, 808.0], [96.6, 810.0], [96.7, 811.0], [96.8, 815.0], [96.9, 819.0], [97.0, 822.0], [97.1, 824.0], [97.2, 825.0], [97.3, 828.0], [97.4, 831.0], [97.5, 833.0], [97.6, 837.0], [97.7, 841.0], [97.8, 845.0], [97.9, 849.0], [98.0, 852.0], [98.1, 858.0], [98.2, 864.0], [98.3, 870.0], [98.4, 878.0], [98.5, 887.0], [98.6, 895.0], [98.7, 903.0], [98.8, 911.0], [98.9, 918.0], [99.0, 925.0], [99.1, 940.0], [99.2, 951.0], [99.3, 962.0], [99.4, 972.0], [99.5, 996.0], [99.6, 1019.0], [99.7, 1033.0], [99.8, 1167.0], [99.9, 1286.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 1762.0, "series": [{"data": [[600.0, 1412.0], [700.0, 478.0], [800.0, 131.0], [200.0, 9.0], [900.0, 45.0], [1000.0, 11.0], [1100.0, 5.0], [1200.0, 5.0], [300.0, 210.0], [1300.0, 1.0], [1400.0, 3.0], [400.0, 1084.0], [500.0, 1762.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1316.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3840.0, "series": [{"data": [[0.0, 1316.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3840.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 49.25839951130118, "minX": 1.6155687E12, "maxY": 50.0, "series": [{"data": [[1.6155687E12, 50.0], [1.61556876E12, 49.25839951130118]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61556876E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 452.0, "minX": 1.0, "maxY": 824.0, "series": [{"data": [[33.0, 752.0], [32.0, 695.0], [2.0, 452.0], [35.0, 607.0], [34.0, 705.0], [37.0, 703.0], [36.0, 712.0], [39.0, 633.0], [38.0, 682.0], [41.0, 645.0], [40.0, 641.0], [43.0, 597.0], [42.0, 605.0], [45.0, 605.0], [44.0, 612.0], [49.0, 505.0], [48.0, 561.0], [3.0, 511.0], [50.0, 578.9931466614448], [4.0, 746.0], [5.0, 627.0], [7.0, 548.5], [9.0, 694.5], [10.0, 559.0], [11.0, 824.0], [12.0, 742.0], [14.0, 653.0], [15.0, 638.0], [1.0, 468.0], [17.0, 755.5], [19.0, 784.0], [20.0, 730.0], [21.0, 766.0], [22.0, 769.0], [23.0, 719.0], [25.0, 809.0], [27.0, 763.0], [28.0, 794.0], [30.0, 805.0], [31.0, 555.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[49.76454615981379, 579.8729635376262]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3219.4333333333334, "minX": 1.6155687E12, "maxY": 1251415.05, "series": [{"data": [[1.6155687E12, 1251415.05], [1.61556876E12, 582144.4833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6155687E12, 6920.7], [1.61556876E12, 3219.4333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61556876E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 553.3072693952344, "minX": 1.6155687E12, "maxY": 592.2310315430507, "series": [{"data": [[1.6155687E12, 592.2310315430507], [1.61556876E12, 553.3072693952344]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61556876E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 552.8289554062326, "minX": 1.6155687E12, "maxY": 591.7391304347808, "series": [{"data": [[1.6155687E12, 591.7391304347808], [1.61556876E12, 552.8289554062326]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61556876E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.6155687E12, "maxY": 5.302926967888617, "series": [{"data": [[1.6155687E12, 5.302926967888617], [1.61556876E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61556876E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 260.0, "minX": 1.6155687E12, "maxY": 1409.0, "series": [{"data": [[1.6155687E12, 1409.0], [1.61556876E12, 1020.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6155687E12, 736.0], [1.61556876E12, 695.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6155687E12, 960.8000000000002], [1.61556876E12, 834.0999999999995]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6155687E12, 798.0], [1.61556876E12, 731.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6155687E12, 260.0], [1.61556876E12, 266.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6155687E12, 583.0], [1.61556876E12, 549.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61556876E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 468.0, "minX": 3.0, "maxY": 941.0, "series": [{"data": [[34.0, 941.0], [3.0, 468.0], [61.0, 613.0], [67.0, 598.0], [64.0, 603.0], [68.0, 674.0], [75.0, 593.0], [74.0, 591.0], [73.0, 556.0], [72.0, 572.0], [78.0, 575.0], [79.0, 578.0], [81.0, 545.0], [80.0, 623.0], [83.0, 578.0], [85.0, 569.0], [87.0, 555.0], [84.0, 634.0], [86.0, 578.0], [90.0, 566.5], [91.0, 575.0], [88.0, 581.0], [95.0, 509.0], [93.0, 632.5], [92.0, 578.5], [96.0, 546.0], [97.0, 550.0], [98.0, 553.0], [99.0, 554.0], [103.0, 553.0], [107.0, 482.0], [105.0, 555.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 107.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 468.0, "minX": 3.0, "maxY": 940.5, "series": [{"data": [[34.0, 940.5], [3.0, 468.0], [61.0, 613.0], [67.0, 597.0], [64.0, 603.0], [68.0, 674.0], [75.0, 593.0], [74.0, 590.5], [73.0, 556.0], [72.0, 572.0], [78.0, 574.5], [79.0, 577.0], [81.0, 544.0], [80.0, 622.5], [83.0, 578.0], [85.0, 569.0], [87.0, 554.0], [84.0, 633.0], [86.0, 577.5], [90.0, 566.0], [91.0, 575.0], [88.0, 580.5], [95.0, 509.0], [93.0, 632.0], [92.0, 578.0], [96.0, 546.0], [97.0, 550.0], [98.0, 552.5], [99.0, 553.0], [103.0, 552.0], [107.0, 481.0], [105.0, 555.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 107.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 26.45, "minX": 1.6155687E12, "maxY": 59.483333333333334, "series": [{"data": [[1.6155687E12, 59.483333333333334], [1.61556876E12, 26.45]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61556876E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 27.283333333333335, "minX": 1.6155687E12, "maxY": 58.65, "series": [{"data": [[1.6155687E12, 58.65], [1.61556876E12, 27.283333333333335]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61556876E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 27.283333333333335, "minX": 1.6155687E12, "maxY": 58.65, "series": [{"data": [[1.6155687E12, 58.65], [1.61556876E12, 27.283333333333335]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61556876E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 27.283333333333335, "minX": 1.6155687E12, "maxY": 58.65, "series": [{"data": [[1.6155687E12, 58.65], [1.61556876E12, 27.283333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61556876E12, "title": "Total Transactions Per Second"}},
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

