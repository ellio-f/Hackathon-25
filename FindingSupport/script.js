// function openTab(evt, tabName) {
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//       tabcontent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//       tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
//     document.getElementById(tabName).style.display = "block";
//     evt.currentTarget.className += " active";
//   }
  
  // Optionally, open the first tab by default
  document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tablinks").click();

    //Load the 'labs.json' info after the page is ready
    fetch('labs.json')
        .then(response => response.json())
        .then(labs => {
            const container = document.getElementById('labs-container');

            labs.forEach(lab => {
                const labSection = document.createElement('section');
                labSection.classList.add('lab-entry'); // optional for styling
                labSection.innerHTML = `
                    <h3>${lab.faculty}</h3>
                    <p><strong>Lab Description:</strong> ${lab.description}</p>
                    <p><strong>Students:</strong> ${lab.students.join(', ')}</p>
                `;
                container.appendChild(labSection);
            });
        })
        .catch(error => console.error('Error loading labs:', error));

  
  });