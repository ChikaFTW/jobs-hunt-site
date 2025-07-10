jQuery( document ).ready(function( $ ) {


	"use strict";


    
        $(function() {
            $( "#tabs" ).tabs();
        });


        // Page loading animation

        $("#preloader").animate({
            'opacity': '0'
        }, 600, function(){
            setTimeout(function(){
                $("#preloader").css("visibility", "hidden").fadeOut();
            }, 300);
        });       

        $(window).scroll(function() {
          var scroll = $(window).scrollTop();
          var box = $('.header-text').height();
          var header = $('header').height();

          if (scroll >= box - header) {
            $("header").addClass("background-header");
          } else {
            $("header").removeClass("background-header");
          }
        });
		if ($('.owl-testimonials').length) {
            $('.owl-testimonials').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 1,
                margin: 30,
                autoplay: false,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    460: {
                        items: 1,
                        margin: 0
                    },
                    576: {
                        items: 2,
                        margin: 20
                    },
                    992: {
                        items: 2,
                        margin: 30
                    }
                }
            });
        }



        
        $(".Modern-Slider").slick({
            autoplay:true,
            autoplaySpeed:10000,
            speed:600,
            slidesToShow:1,
            slidesToScroll:1,
            pauseOnHover:false,
            dots:true,
            pauseOnDotsHover:true,
            cssEase:'linear',
           // fade:true,
            draggable:false,
            prevArrow:'<button class="PrevArrow"></button>',
            nextArrow:'<button class="NextArrow"></button>', 
        });

        function visible(partial) {
            var $t = partial,
                $w = jQuery(window),
                viewTop = $w.scrollTop(),
                viewBottom = viewTop + $w.height(),
                _top = $t.offset().top,
                _bottom = _top + $t.height(),
                compareTop = partial === true ? _bottom : _top,
                compareBottom = partial === true ? _top : _bottom;

            return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));

        }

        $(window).scroll(function(){

          if(visible($('.count-digit')))
            {
              if($('.count-digit').hasClass('counter-loaded')) return;
              $('.count-digit').addClass('counter-loaded');
              
        $('.count-digit').each(function () {
          var $this = $(this);
          jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
            duration: 3000,
            easing: 'swing',
            step: function () {
              $this.text(Math.ceil(this.Counter));
            }
          });
        });
        }
    })
    if ($('.owl-partners').length) {
  setTimeout(() => {
    $('.owl-partners').owlCarousel({
      rtl: false, // ❌ force it off, regardless of page dir
      loop: true,
      nav: false,
      dots: false,
      margin: 15,
      autoplay: true,
      autoplayTimeout: 3000,
      smartSpeed: 700,
      responsive: {
        0: { items: 2, margin: 0 },
        600: { items: 3, margin: 10 },
        1000: { items: 5, margin: 15 }
      }
    });
  }, 300);
}
});

 const images = document.querySelectorAll('.gallery-track img');
  const popup = document.createElement('div');
  popup.className = 'image-popup';
  popup.innerHTML = `
    <span class="close">&times;</span>
    <span class="arrow left">&#10094;</span>
    <img src="" alt="Popup Image">
    <span class="arrow right">&#10095;</span>
  `;
  document.body.appendChild(popup);

  const popupImg = popup.querySelector('img');
  const closeBtn = popup.querySelector('.close');
  const leftArrow = popup.querySelector('.arrow.left');
  const rightArrow = popup.querySelector('.arrow.right');

  let currentIndex = 0;

  function showImage(index) {
    popupImg.src = images[index].src;
    popup.classList.add('active');
    currentIndex = index;
  }

  images.forEach((img, index) => {
    img.addEventListener('click', () => showImage(index));
  });

  closeBtn.addEventListener('click', () => popup.classList.remove('active'));

  leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });

  rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') popup.classList.remove('active');
  });

  
  document.addEventListener("DOMContentLoaded", function () {
    const hash = window.location.hash;

    if (hash) {
      // Check if target is inside a tab (like #barista inside #tabs-5)
      const targetElement = document.querySelector(hash);

      // Find the closest tab container (e.g. tabs-5) if inside one
      const parentTab = targetElement ? targetElement.closest("article") : null;

      if (parentTab) {
        // Open the parent tab first
        const parentTabId = "#" + parentTab.id;
        const tabLink = document.querySelector(`a[href='${parentTabId}']`);
        if (tabLink) tabLink.click();

        // Scroll after short delay to ensure tab content is visible
        setTimeout(() => {
          const offset = targetElement.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({
            top: offset,
            behavior: "smooth"
          });
        }, 200);
      } else {
        // Fallback: scroll to full tab directly
        const fullTab = document.querySelector(hash);
        if (fullTab) {
          const offset = fullTab.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({
            top: offset,
            behavior: "smooth"
          });
        }
      }
    }
  });

  // here am using " Adzuna Job API " 

  // Configuration
const config = {
    appId: '4f766f0f', // Keep your actual App ID
    appKey: '423697dcc76a00622c6c9c7323745e42', // Keep your actual App Key
    baseUrl: 'https://api.adzuna.com/v1/api/jobs',
    defaultCountry: 'za', // Change as default from the selec
    resultsPerPage: 4,
    defaultKeywords: '',
    categoryMappings: {
        'healthcare': 'healthcare',
        'transport-logistics': 'transport-logistics',
        'security': 'security',
        'beauty': 'beauty',
        'domestic-help-cleaning': 'domestic-help-cleaning',
        'hospitality-catering': 'hospitality-catering',
        'construction': 'construction'
    }
    
};


// State management
let currentPage = 1;
let totalPages = 1;

// DOM Elements
const elements = {
    keywordsInput: document.getElementById('job-keywords'),
    locationInput: document.getElementById('job-location'),
    countrySelect: document.getElementById('job-country'),
    categorySelect: document.getElementById('job-category'),
    searchButton: document.getElementById('search-jobs'),
    resultsContainer: document.getElementById('job-results'),
    loadingIndicator: document.getElementById('loading'),
    prevPageButton: document.getElementById('prev-page'),
    nextPageButton: document.getElementById('next-page'),
    pageInfo: document.getElementById('page-info')
};

// Fetch jobs from Adzuna API
async function fetchJobs() {
    const country = elements.countrySelect.value || config.defaultCountry;
    const keywords = elements.keywordsInput.value || config.defaultKeywords;
    const location = elements.locationInput.value;
    const category = elements.categorySelect.value;
    const endpoint = `${config.baseUrl}/${country}/search/${currentPage}`;

    
    let params = new URLSearchParams({
        app_id: config.appId,
        app_key: config.appKey,
        results_per_page: config.resultsPerPage,
        what: keywords
    });
    
    if (location) params.append('where', location);
    if (category) params.append('category', category);
    
     try {
        showLoading(true);
        const response = await fetch(`${endpoint}?${params.toString()}`);
        
        if (!response.ok) throw new Error(`API request failed with status ${response.status}`);
        
        const data = await response.json();
        
        // Fix pagination when no results
        if (!data.results || data.results.length === 0) {
            totalPages = 1;
            currentPage = 1;
            updatePagination();
            return { results: [] };
        }
        
        totalPages = Math.ceil(data.count / config.resultsPerPage);
        updatePagination();
        return data;
    } catch (error) {
        console.error('Error fetching jobs:', error);
        showError(error.message);
        return { results: [] };
    } finally {
        showLoading(false);
    }
}

// Display jobs in the UI
function displayJobs(jobs) {
    elements.resultsContainer.innerHTML = '';
    
    if (!jobs.results || jobs.results.length === 0) {
        elements.resultsContainer.innerHTML = `
            <div class="no-results">
                <p>No jobs found matching your criteria.</p>
                <p>Try adjusting your search filters.</p>
            </div>
        `;
        return;
    }
    
        jobs.results.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';
        
        // Format salary information
        let salaryInfo = 'Not specified';
        if (job.salary_min || job.salary_max) {
            const min = job.salary_min ? formatSalary(job.salary_min) : 'N/A';
            const max = job.salary_max ? formatSalary(job.salary_max) : 'N/A';
            salaryInfo = `${min} - ${max} ${job.salary_currency || ''}`;
        }
        
        // Format contract time
        const contractTime = job.contract_time ? 
            job.contract_time.charAt(0).toUpperCase() + job.contract_time.slice(1) : 
            'Not specified';
        
        jobCard.innerHTML = `
            <h3>${job.title}</h3>
            <p class="company"><strong>Company:</strong> ${job.company?.display_name || 'Not specified'}</p>
            <p class="location"><strong>Location:</strong> ${job.location?.display_name || 'Remote'}</p>
            <p class="salary"><strong>Salary:</strong> ${salaryInfo}</p>
            <p class="contract"><strong>Contract:</strong> ${contractTime}</p>
            <div class="description">
                ${truncateDescription(job.description, 200)}
            </div>
            <a href="${job.redirect_url}" target="_blank" rel="noopener noreferrer" class="view-job">
                View Job Details
            </a>
            <p class="posted-date"><small>Posted: ${formatDate(job.created)}</small></p>
        `;
        
        elements.resultsContainer.appendChild(jobCard);
    });
}

// Helper functions
function formatSalary(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    }).format(amount).replace(/^[A-Z]+\s/, ''); // Remove currency prefix if any
}


function truncateDescription(text, maxLength) {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return `${text.substring(0, maxLength)}...`;
}

function formatDate(dateString) {
    if (!dateString) return 'Unknown';
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function showLoading(show) {
    elements.loadingIndicator.style.display = show ? 'block' : 'none';
}

function showError(message) {
    elements.resultsContainer.innerHTML = `
        <div class="error-message">
            <p>Error loading jobs: ${message}</p>
            <p>Please try again later.</p>
        </div>
    `;
}

function updatePagination() {
    elements.pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
    elements.prevPageButton.disabled = currentPage <= 1;
    elements.nextPageButton.disabled = currentPage >= totalPages;
}

// Event listeners
elements.searchButton.addEventListener('click', async () => {
    currentPage = 1;
    const jobs = await fetchJobs();
    const recentJobs = filterRecentJobs(jobs.results || []);
    displayJobs({ results: recentJobs });
});

elements.prevPageButton.addEventListener('click', async () => {
    if (currentPage > 1) {
        currentPage--;
        const jobs = await fetchJobs();
        const recentJobs = filterRecentJobs(jobs.results || []);
        displayJobs({ results: recentJobs });
    }
});

elements.nextPageButton.addEventListener('click', async () => {
    if (currentPage < totalPages) {
        currentPage++;
        const jobs = await fetchJobs();
        const recentJobs = filterRecentJobs(jobs.results || []);
        displayJobs({ results: recentJobs });
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', async () => {
    const defaultCountry = elements.countrySelect.value;
    currentPage = 1;
    const jobs = await fetchJobs();
    const recentJobs = filterRecentJobs(jobs.results || []);
    displayJobs({ results: recentJobs });
});

function filterRecentJobs(jobsArray) {
    const today = new Date();
    const sixtyDaysAgo = new Date();
    sixtyDaysAgo.setDate(today.getDate() - 60);
    return jobsArray.filter(job => {
    const jobDate = new Date(job.created);
    return jobDate >= sixtyDaysAgo;
    });
}


// end Adzuna 

// Simple caching implementation
const cache = {
    data: null,
    timestamp: null,
    ttl: 30 * 60 * 1000 // 30 minutes
};

async function fetchJobsWithCache() {
    const now = Date.now();
    const cacheKey = JSON.stringify({
        country: elements.countrySelect.value,
        keywords: elements.keywordsInput.value,
        location: elements.locationInput.value,
        category: elements.categorySelect.value,
        page: currentPage
    });
    if (cache.data && cache.timestamp && (now - cache.timestamp) < cache.ttl) {
        return cache.data;
    }
    const data = await fetchJobs();
    cache.data = data;
    cache.timestamp = now;
    return data;
}
// end cashing adzuna and """"  future local storage under it 

// add form clear to the form logic
document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll('form[action="https://formbold.com/s/3w2Wk"]');

  forms.forEach(form => {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      const button = form.querySelector("button[type='submit']");
      const originalText = button.innerHTML;

      // Show loading spinner
      button.disabled = true;
      button.innerHTML = `<span class="loader"></span> Sending...`;

      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          form.reset();
          button.innerHTML = "✅ Message Sent!";
          button.classList.add('success');
        } else {
          button.innerHTML = "❌ Failed to send.";
        }
      } catch (error) {
        button.innerHTML = "❌ Error occurred.";
      }

      setTimeout(() => {
        button.innerHTML = originalText;
        button.disabled = false;
        button.classList.remove('success');
      }, 3000);
    });
  });
});


// end 

