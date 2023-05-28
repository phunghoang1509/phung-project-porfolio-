const HomePage = () => {
    return `<!-- ======= Header ======= -->
    <header id="header" class="fixed-top">
      <div class="container d-flex align-items-center justify-content-between">
  
        <h1 class="logo"><a href="index.html">Portfolio</a></h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
  
        <nav id="navbar" class="navbar">
          <ul>
            <li><a class="nav-link scrollto active" href="/home">Home</a></li>
            <li><a class="nav-link scrollto" href="/about">About</a></li>
            <li><a class="nav-link scrollto" href="/service">Services</a></li>
            <li><a class="nav-link scrollto " href="/work">Work</a></li>
            <li><a class="nav-link scrollto " href="/blog">Blog</a></li>
        
            <li><a class="nav-link scrollto" href="/contact">Contact</a></li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav><!-- .navbar -->
  
      </div>
    </header><!-- End Header -->
    <!-- ======= Hero Section ======= -->
    <div id="hero" class="hero route bg-image" style="background-image: url(assets/img/hero-bg.jpg)">
      <div class="overlay-itro"></div>
      <div class="hero-content display-table">
        <div class="table-cell">
          <div class="container">
            <!--<p class="display-6 color-d">Hello, world!</p>-->
            <h1 class="hero-title mb-4">I am Hoang Minh Phung </br> I am a Developer</h1>
            <p class="hero-subtitle"><span class="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
            <!-- <p class="pt-3"><a class="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p> -->
          </div>
        </div>
      </div>
    </div><!-- End Hero Section -->


    <main id="main">

  </main><!-- End #main -->
  <!-- ======= Footer ======= -->
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="copyright-box">
            <p class="copyright">&copy; Copyright <strong>DevFolio</strong>. All Rights Reserved</p>
            <div class="credits">
           
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer><!-- End  Footer -->
    `;
};


export default HomePage;