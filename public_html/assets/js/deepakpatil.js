/*!
=========================================================
* DeepakPatil Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function () {
    $(".navbar .nav-link").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
  
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          700,
          function () {
            window.location.hash = hash;
          }
        );
      }
    });
  });
  
  //hire me to contact from scroll
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  }
  
  // validation for accept name only
  function clsAlphaNoOnly(e) {
    // Accept only alpha numerics, no special characters
    var regex = new RegExp("^[A-Za-z ]+$");
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
      return true;
    }
    e.preventDefault();
    return false;
  }
  
  // protfolio filters
  $(window).on("load", function () {
    var t = $(".portfolio-container");
    if (t.length > 0) {
      t.isotope({
        filter: ".new",
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: !1,
        },
      }),
        $(".filters a").click(function () {
          $(".filters .active").removeClass("active"), $(this).addClass("active");
          var i = $(this).attr("data-filter");
          return (
            t.isotope({
              filter: i,
              animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1,
              },
            }),
            !1
          );
        });
    }
  });

  //contact-us form submit
  $(document).ready(function () {
    jQuery.validator.addMethod(
      "validate_email",
      function (value, element) {
        if (
          /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
            value
          )
        ) {
          return true;
        } else {
          return false;
        }
      },
      "Please enter a valid Email."
    );
  
    $("form").validate({
      onfocusout: function (element) {
        $(element).valid();
      },
      rules: {
        name: "required",
        message: "required",
        email: {
          required: true,
          email: true,
          validate_email: true,
        },
        agree: "required",
      },
      messages: {
        name: "Please enter your name",
        email: {
          required: "Please enter email",
          email: "Please enter valid email",
        },
        agree: "Please complete this required field",
      },
      errorPlacement: function (error, element) {
        if (element.attr("name") == "agree") {
          error.appendTo("#errorToShow");
        } else {
          error.insertAfter(element);
        }
      },
      submitHandler: function (form) {
        var params = {
          name: $("#name").val(),
          email: $("#email").val(),
          message: $("#message").val(),
        };
  
        const serviceId = "service_qjxlaxi";
        const templateId = "template_zzyzk8e";
  
        emailjs
          .send(serviceId, templateId, params)
          .then((res) => {
            console.log(res);
            $("#myModal").addClass("show");
          })
          .catch((err) => {
            console.log(err);
            $("#result").html("<h2>Error!</h2>");
          });
      },
    });
  });
  