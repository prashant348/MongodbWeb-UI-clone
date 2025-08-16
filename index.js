console.log('Hello world')


// buttons and links
const amBtn = document.getElementById('AM-btn')
const getHelpBtn = document.getElementById('get-help-btn')
const orgBtn = document.getElementById('org-btn')
const tripleDotBtn = document.getElementById('triple-dot-btn')
const projectBtn = document.getElementById('project-btn')
const profileBtn = document.getElementById('profile-btn')

const forumDropdownBtn = document.getElementById('forum-dropdown-btn')
const forumBtn = document.getElementById('forum-btn')
const supportDropdownBtn = document.getElementById('support-dropdown-btn')
const supportBtn = document.getElementById('support-btn')

const sidebarToggleBtn = document.getElementById('sidebar-toggle-btn')
const sidebarToggleBtnIcon = document.querySelector('.bold-angle-icon')



// div, box and input tags
const OrgResponseSrchBarBox = document.getElementById('org-btn-response-srchbar-box')
const OrgResponseInput = document.getElementById('org-btn-response-input-box').childNodes[1]

const ProjectResponseSrchBarBox = document.getElementById('project-btn-response-srchbar-box')
const ProjectResponseInput = document.getElementById('project-btn-response-input-box').childNodes[1]
// console.log(OrgResponseInput)
// console.log(ProjectResponseInput)

const forumDropdown = document.getElementById('forum-dropdown')
const supportDropdown = document.getElementById('support-dropdown')

const container = document.getElementById('container')
const sidebarUl = document.getElementById('sidebar-ul')
const sidebar = document.getElementById('sidebar')
const sidebarInsertionBox = document.getElementById('sidebar-insertion-box')

const contentArea = document.getElementById('content-area')

// responses of buttons and links
const amBtnResponse = document.getElementById('AM-btn-result')
const getHelpBtnResponse = document.getElementById('get-help-btn-response')
const orgBtnResponse = document.getElementById('org-btn-response')
const tripleDotBtnResponse = document.getElementById('triple-dot-btn-response')
const projectBtnResponse = document.getElementById('project-btn-response')
const profileBtnResponse = document.getElementById('profile-btn-response')


const responseBox = document.getElementById('response-box')
// console.log(responseBox.children)
const responseBoxChildElements = [...responseBox.children]
// console.log(responseBoxChildElements)




function response() {
    amBtn.addEventListener('click', () => {
        if(amBtnResponse.style.display === "flex") {
            amBtnResponse.style.animation = "fadeOut 0.3s ease forwards"

            setTimeout(() => {
                amBtnResponse.style.display = "none"
            }, 300)

            amBtn.style.border = ""
        } else {
            amBtnResponse.style.display = "flex"
            amBtnResponse.style.animation = "fadeIn 0.3s ease forwards"
            amBtn.style.border = "1px solid rgb(230, 230, 230)"
        }
    })
    
    // getHelpBtn response logic 
    getHelpBtn.addEventListener('click', () => {
        if (getHelpBtnResponse.style.display === "flex") {
            getHelpBtnResponse.style.animation = "fadeOut 0.3s ease forwards"

            setTimeout(() => {
                getHelpBtnResponse.style.display = "none"
            }, 300)

            getHelpBtn.style.border = ""
        } else {
            getHelpBtnResponse.style.display = "flex"
            getHelpBtnResponse.style.animation = "fadeIn 0.3s ease forwards"
            getHelpBtn.style.border = "1px solid rgb(230, 230, 230)"
        }
    })

    orgBtn.addEventListener('click', () => {
        if (orgBtnResponse.style.display === "block") {

            orgBtnResponse.style.animation = "fadeOut 0.3s ease forwards"

            setTimeout(() => {
                orgBtnResponse.style.display = "none"
            }, 300)

            orgBtn.style.boxShadow = ""
            orgBtn.style.zIndex = ""
        } else {
            orgBtnResponse.style.display = "block"
            OrgResponseInput.focus()
            orgBtnResponse.style.animation = "fadeIn 0.3s ease forwards"
            orgBtn.style.boxShadow = "0px 0px 5px rgba(150, 150, 150, 0.8)"
            orgBtn.style.zIndex = "1000"
        }
    })

    tripleDotBtn.addEventListener('click', () => {
        if (tripleDotBtnResponse.style.display === "flex") {
            tripleDotBtnResponse.style.animation = "fadeOut 0.3s ease forwards"

            setTimeout(() => {
                tripleDotBtnResponse.style.display = "none"
            }, 300)

            tripleDotBtn.style.boxShadow = ""
            tripleDotBtn.style.zIndex = ""
        } else {
            tripleDotBtnResponse.style.display = "flex"
            tripleDotBtnResponse.style.animation = "fadeIn 0.3s ease forwards"
            tripleDotBtn.style.boxShadow = "0px 0px 5px rgba(150, 150, 150, 0.8)"
            tripleDotBtn.style.zIndex = "1000"
        }
    })

    projectBtn.addEventListener('click', () => {
        if (projectBtnResponse.style.display === "flex") {

            projectBtnResponse.style.animation = "fadeOut 0.3s ease forwards"

            setTimeout(() => {
                projectBtnResponse.style.display = "none"
            }, 300)

            projectBtn.style.boxShadow = ""
            projectBtn.style.zIndex = ""
        } else {
            projectBtnResponse.style.display = "flex"
            ProjectResponseInput.focus()
            projectBtnResponse.style.animation = "fadeIn 0.3s ease forwards"
            projectBtn.style.boxShadow = "0px 0px 5px rgba(150, 150, 150, 0.8)"
            projectBtn.style.zIndex = "1000"
        }
    })

    profileBtn.addEventListener('click', () => {
        if (profileBtnResponse.style.display === "flex") {
            profileBtnResponse.style.animation = "fadeOut 0.3s ease forwards"

            setTimeout(() => {
                profileBtnResponse.style.display = "none"
            }, 300)

            profileBtn.style.boxShadow = ""
            profileBtn.style.zIndex = ""
            profileBtn.style.fontWeight = ""
        } else {
            profileBtnResponse.style.display = "flex"
            profileBtn.style.fontWeight = "bold"
            profileBtn.style.transition = "font-weight 0.2s ease-in-out"
            profileBtnResponse.style.animation = "fadeIn 0.3s ease forwards"
            profileBtn.style.boxShadow = "0px 0px 5px rgba(150, 150, 150, 0.8)"
            profileBtn.style.zIndex = "1000"
        }
    })
}


response()



OrgResponseInput.addEventListener("focus", () => {
    OrgResponseSrchBarBox.style.border = "3px solid #0498EC"
})

OrgResponseInput.addEventListener('focusout', () => {
    OrgResponseSrchBarBox.style.border = "1px solid rgb(150, 150, 150)" 
})

ProjectResponseInput.addEventListener("focus", () => {
    ProjectResponseSrchBarBox.style.border = "3px solid #0498EC"
})

ProjectResponseInput.addEventListener('focusout', () => {
    ProjectResponseSrchBarBox.style.border = "1px solid rgb(150, 150, 150)" 
})

// forumBtn.addEventListener('mouseover', () => {
//     forumDropdownBtn.style.backgroundColor = "#001E2B"

// })


// forumBtn.addEventListener('mouseleave', () => {
//     forumDropdownBtn.style.backgroundColor = ""
// })


forumDropdownBtn.addEventListener('click', (e) => {
    e.stopPropagation()

    // forumDropdownBtn.style.transform = "rotate(180deg)"
    // forumDropdownBtn.style.transition = "transform 0.5s ease-in-out"  

    if (forumDropdown.style.display === "flex") {

        forumDropdownBtn.style.transform = "rotate(0deg)"
        forumDropdownBtn.style.transition = "transform 0.3s ease-in-out"
        forumDropdown.style.display = "none"

    } else {

        forumDropdownBtn.style.transform = "rotate(180deg)"
        forumDropdownBtn.style.transition = "transform 0.3s ease-in-out" 
        forumDropdown.style.display = "flex"
    }
})


supportDropdownBtn.addEventListener('click', (e) => {
    e.stopPropagation()

    // forumDropdownBtn.style.transform = "rotate(180deg)"
    // forumDropdownBtn.style.transition = "transform 0.5s ease-in-out"  

    if (supportDropdown.style.display === "flex") {

        supportDropdownBtn.style.transform = "rotate(0deg)"
        supportDropdownBtn.style.transition = "transform 0.3s ease-in-out"
        supportDropdown.style.display = "none"
    } else {

        supportDropdownBtn.style.transform = "rotate(180deg)"
        supportDropdownBtn.style.transition = "transform 0.3s ease-in-out" 
        supportDropdown.style.display = "flex"  
    }
})

// ---------------------------------SIDEBAR TOGGLE BTN LOGIC---------------------------------


function sidebarToggleBtnLogic() {

    sidebarToggleBtn.addEventListener('mouseover', () => {
        sidebarToggleBtnIcon.style.transform = "translateX(-3px)"
        sidebarToggleBtnIcon.style.transition = "transform 0.2s ease-in-out"

    })
    ;
    sidebarToggleBtn.addEventListener('mouseleave', () => {
        sidebarToggleBtnIcon.style.transform = "translateX(0px)"
        sidebarToggleBtnIcon.style.transition = "transform 0.2s ease-in-out"
    });
    

    let sidebarExpanded = true;

    sidebarToggleBtn.addEventListener('click', (e) => {
        // console.log('sidebarToggleBtn clicked');
        
        if (sidebarExpanded) {
            // Collapse
            sidebarToggleBtn.style.transform = "rotateY(180deg)";
            // sidebarToggleBtn.style.transition = "transform 0.1s ease-in-out";
            sidebarUl.style.display = "none";
            sidebarInsertionBox.style.display = "block"
            sidebar.style.justifyContent = "space-between";
            container.style.gridTemplateColumns = "48px 1fr";
            container.style.transition = "grid-template-columns 0.3s 0.05s cubic-bezier(0.075, 0.82, 0.165, 1)";
            sidebarExpanded = false;
        } else {
            // Expand
            sidebarToggleBtn.style.transform = "rotateY(0deg)";
            // sidebarToggleBtn.style.transition = "transform 0.1s ease-in-out";
            sidebarInsertionBox.style.display = "none"

            // ys justify-content: end;  sirf 0.3 sec ke liye hai fir block ho jayega
            sidebar.style.justifyContent = "end"; // pehle hamne "end" karke hamne togglebtn ko upar khisak ne se bacha liya
            container.style.gridTemplateColumns = "185px 1fr";
            container.style.transition = "grid-template-columns 0.3s cubic-bezier(0.075, 0.82, 0.165, 1)";
            
            setTimeout(() => {
                sidebar.style.justifyContent = "space-between"; // final "space-between" ho gaya 
                sidebarUl.style.display = "block";
            }, 300);
            sidebarExpanded = true;
        }
    });


};
sidebarToggleBtnLogic()


// ------------------------------------------INSERT HTML TEMPLATES IN INDEX.HTML LOGIC (SPA FRAMEWORK LOGIC)------------------------------------------


// SIDEBAR BTNS:
const overviewBtn = document.getElementById('overview-btn')
const clustersBtn = document.getElementById('clusters-btn')
const verticalStick = document.createElement('span')

verticalStick.innerText = "|"

console.log(verticalStick)
function insertTemplate() {

    overviewBtn.addEventListener("click", (e) => {
        e.preventDefault()
        fetch('templates/overview.html')
            .then(res => res.text())
            .then(data => {
                contentArea.innerHTML = data
                // console.log(data)
            }).catch(err => console.log(err))
    });

    clustersBtn.addEventListener('click', (e) => {
        e.preventDefault()
        fetch('templates/clusters.html')
            .then(res => res.text())
            .then(data => {
                contentArea.innerHTML = data
            }).catch(err => console.log(err))
        
        clustersBtn.style.fontWeight = "600"
        clustersBtn.style.color = "darkgreen"
        clustersBtn.style.backgroundColor = "#E3FCF7"
        clustersBtn.insertAdjacentElement("afterbegin", verticalStick)
        verticalStick.style.position = "relative"
        verticalStick.style.left = "-18px"
        verticalStick.style.fontSize = "20px"
        verticalStick.style.color = "#00A35C"

        overviewBtn.style.fontWeight = ""
        overviewBtn.style.color = ""
        overviewBtn.style.backgroundColor = ""
        
    });
};
insertTemplate()


function defaultTemplate() {
    fetch('templates/overview.html')
        .then(res => res.text())
        .then(data => {
            contentArea.innerHTML = data
            console.log(data)
        }).catch(err => console.log(err))

        overviewBtn.style.fontWeight = "600"
        overviewBtn.style.color = "darkgreen"
        overviewBtn.style.backgroundColor = "#E3FCF7"
        overviewBtn.insertAdjacentElement("afterbegin", verticalStick)
        verticalStick.style.position = "relative"
        verticalStick.style.left = "-18px"
        verticalStick.style.fontSize = "20px"
        verticalStick.style.color = "#00A35C"

    overviewBtn.addEventListener('click', () => {
        fetch('templates/overview.html')
        .then(res => res.text())
        .then(data => {
            contentArea.innerHTML = data
            console.log(data)
        }).catch(err => console.log(err))

        overviewBtn.style.fontWeight = "600"
        overviewBtn.style.color = "darkgreen"
        overviewBtn.style.backgroundColor = "#E3FCF7"
        overviewBtn.insertAdjacentElement("afterbegin", verticalStick)
        verticalStick.style.position = "relative"
        verticalStick.style.left = "-18px"
        verticalStick.style.fontSize = "20px"
        verticalStick.style.color = "#00A35C"



        clustersBtn.style.fontWeight = ""
        clustersBtn.style.color = ""
        clustersBtn.style.backgroundColor = ""
    })

}

defaultTemplate()


































// why returning empty string, baad mai dekhta hu
// console.log(container.style.gridTemplateColumns)




















//  TO CHECK EVENT BUBBLING
// supportBtn.addEventListener('click', () => {
//     console.log('supportBtn clicked')
// })

// forumBtn.addEventListener('click', () => {
//     console.log('forumBtn clicked')
// })

