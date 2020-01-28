// Particle credit to Y Endo

function random(low, high) {
  return Math.random() * (high - low) + low;
}

// Rotating Text credit to alphardex
var words = document.querySelectorAll(".word");
words.forEach(function(word) {
  var letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach(function(letter) {
    var span = document.createElement("span");
    if (letter == " ") {
      span.textContent = " ";
      span.className = "letter";
      word.append(span);
    } else {
      span.textContent = letter;
      span.className = "letter";
      word.append(span);
    }
  });
});
var currentWordIndex = 0;
var maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";
var rotateText = function() {
  var currentWord = words[currentWordIndex];
  var nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
  // rotate out letters of current word
  Array.from(currentWord.children).forEach(function(letter, i) {
    setTimeout(function() {
      letter.className = "letter out";
    }, i * 40);
  });
  // reveal and rotate in letters of next word
  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach(function(letter, i) {
    letter.className = "letter behind";
    setTimeout(function() {
      letter.className = "letter in";
    }, 500 + i * 20);
  });
  currentWordIndex =
    currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};
setTimeout(rotateText, 1000);
setInterval(rotateText, 3000);

// Jump to Bio
$("#landing-container").click(function() {
  $('html,body').animate({
    scrollTop: $("#bio_container").offset().top
  },
    duration = 1000);
});

// $("#main_container").click(function() {
//   $('html,body').animate({
//     scrollTop: $("#bio_container").offset().top
//   },
//     duration = 1000);
// });


// Video Handling JS
$(".video-container").on('click', function(event) {
  var v = document.getElementById("makerportfolio");
  togglePause(v)
});

$("#togglePlayButton").on('click', function(event) {
  var v = document.getElementById("makerportfolio");
  togglePause(v)
});

var cursorOnDiv = false;

$(document).on({
  mouseenter: function() {
    cursorOnDiv = true;
  },
  mouseleave: function() {
    cursorOnDiv = false;
  },
},
  '#vid_player_card'
);

// Project Accordion
$(function() {
  $(".accordion > .accordion-item.is-active .proj_left").children(".accordion-panel").slideDown();

  $(".accordion > .accordion-item > .proj_left").click(function() {
    $(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
  });
});

//contact_buttons
const buttons = Array.from(document.querySelectorAll("button"));

buttons.forEach(btn => {
	btn.addEventListener("click", () => {
		btn.classList.toggle("active");
	});
});

//scroll animations
(function() {
  var Util,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Util = (function() {
    function Util() {}

    Util.prototype.extend = function(custom, defaults) {
      var key, value;
      for (key in custom) {
        value = custom[key];
        if (value != null) {
          defaults[key] = value;
        }
      }
      return defaults;
    };

    Util.prototype.isMobile = function(agent) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
    };

    return Util;

  })();

  this.WOW = (function() {
    WOW.prototype.defaults = {
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true
    };

    function WOW(options) {
      if (options == null) {
        options = {};
      }
      this.scrollCallback = __bind(this.scrollCallback, this);
      this.scrollHandler = __bind(this.scrollHandler, this);
      this.start = __bind(this.start, this);
      this.scrolled = true;
      this.config = this.util().extend(options, this.defaults);
    }

    WOW.prototype.init = function() {
      var _ref;
      this.element = window.document.documentElement;
      if ((_ref = document.readyState) === "interactive" || _ref === "complete") {
        return this.start();
      } else {
        return document.addEventListener('DOMContentLoaded', this.start);
      }
    };

    WOW.prototype.start = function() {
      var box, _i, _len, _ref;
      this.boxes = this.element.getElementsByClassName(this.config.boxClass);
      if (this.boxes.length) {
        if (this.disabled()) {
          return this.resetStyle();
        } else {
          _ref = this.boxes;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            box = _ref[_i];
            this.applyStyle(box, true);
          }
          window.addEventListener('scroll', this.scrollHandler, false);
          window.addEventListener('resize', this.scrollHandler, false);
          return this.interval = setInterval(this.scrollCallback, 50);
        }
      }
    };

    WOW.prototype.stop = function() {
      window.removeEventListener('scroll', this.scrollHandler, false);
      window.removeEventListener('resize', this.scrollHandler, false);
      if (this.interval != null) {
        return clearInterval(this.interval);
      }
    };

    WOW.prototype.show = function(box) {
      this.applyStyle(box);
      return box.className = "" + box.className + " " + this.config.animateClass;
    };

    WOW.prototype.applyStyle = function(box, hidden) {
      var delay, duration, iteration;
      duration = box.getAttribute('data-wow-duration');
      delay = box.getAttribute('data-wow-delay');
      iteration = box.getAttribute('data-wow-iteration');
      return box.setAttribute('style', this.customStyle(hidden, duration, delay, iteration));
    };

    WOW.prototype.resetStyle = function() {
      var box, _i, _len, _ref, _results;
      _ref = this.boxes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        box = _ref[_i];
        _results.push(box.setAttribute('style', 'visibility: visible;'));
      }
      return _results;
    };

    WOW.prototype.customStyle = function(hidden, duration, delay, iteration) {
      var style;
      style = hidden ? "visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;" : "visibility: visible;";
      if (duration) {
        style += "-webkit-animation-duration: " + duration + "; -moz-animation-duration: " + duration + "; animation-duration: " + duration + ";";
      }
      if (delay) {
        style += "-webkit-animation-delay: " + delay + "; -moz-animation-delay: " + delay + "; animation-delay: " + delay + ";";
      }
      if (iteration) {
        style += "-webkit-animation-iteration-count: " + iteration + "; -moz-animation-iteration-count: " + iteration + "; animation-iteration-count: " + iteration + ";";
      }
      return style;
    };

    WOW.prototype.scrollHandler = function() {
      return this.scrolled = true;
    };

    WOW.prototype.scrollCallback = function() {
      var box;
      if (this.scrolled) {
        this.scrolled = false;
        this.boxes = (function() {
          var _i, _len, _ref, _results;
          _ref = this.boxes;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            box = _ref[_i];
            if (!(box)) {
              continue;
            }
            if (this.isVisible(box)) {
              this.show(box);
              continue;
            }
            _results.push(box);
          }
          return _results;
        }).call(this);
        if (!this.boxes.length) {
          return this.stop();
        }
      }
    };

    WOW.prototype.offsetTop = function(element) {
      var top;
      top = element.offsetTop;
      while (element = element.offsetParent) {
        top += element.offsetTop;
      }
      return top;
    };

    WOW.prototype.isVisible = function(box) {
      var bottom, offset, top, viewBottom, viewTop;
      offset = box.getAttribute('data-wow-offset') || this.config.offset;
      viewTop = window.pageYOffset;
      viewBottom = viewTop + this.element.clientHeight - offset;
      top = this.offsetTop(box);
      bottom = top + box.clientHeight;
      return top <= viewBottom && bottom >= viewTop;
    };

    WOW.prototype.util = function() {
      return this._util || (this._util = new Util());
    };

    WOW.prototype.disabled = function() {
      return !this.config.mobile && this.util().isMobile(navigator.userAgent);
    };

    return WOW;

  })();

}).call(this);


wow = new WOW(
  {
    animateClass: 'animated',
    offset: 100
  }
);
wow.init();

class HoverButton {
  constructor(el) {
    this.el = el;
    this.hover = false;
    this.calculatePosition();
    this.attachEventsListener();
  }

  attachEventsListener() {
    window.addEventListener('mousemove', e => this.onMouseMove(e));
    window.addEventListener('resize', e => this.calculatePosition(e));
  }

  calculatePosition() {
    TweenMax.set(this.el, {
      x: 0,
      y: 0,
      scale: 1
    });
    const box = this.el.getBoundingClientRect();
    this.x = box.left + (box.width * 0.5);
    this.y = box.top + (box.height * 0.5);
    this.width = box.width;
    this.height = box.height;
  }

  onMouseMove(e) {
    let hover = false;
    let hoverArea = (this.hover ? 0.7 : 0.5);
    let x = e.clientX - this.x;
    let y = e.clientY - this.y;
    let distance = Math.sqrt( x*x + y*y );
    if (distance < (this.width * hoverArea)) {
       hover = true;
        if (!this.hover) {
          this.hover = true;
        }
        this.onHover(e.clientX, e.clientY);
    }

    if(!hover && this.hover) {
      this.onLeave();
      this.hover = false;
    }
  }

  onHover(x, y) {
    TweenMax.to(this.el, 0.4, {
      x: (x - this.x) * 0.4,
      y: (y - this.y) * 0.4,
      scale: 1.15,
      ease: Power2.easeOut
    });
    this.el.style.zIndex = 10;
  }
  onLeave() {
    TweenMax.to(this.el, 0.7, {
      x: 0,
      y: 0,
      scale: 1,
      ease: Elastic.easeOut.config(1.2, 0.4)
    });
    this.el.style.zIndex = 1;
  }
}

const btn1 = document.querySelector('li2:nth-child(1) button');
new HoverButton(btn1);
