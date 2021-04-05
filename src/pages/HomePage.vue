<template>
  <navBarComp />
  <div class="site-section">
    <div class="container">
      <div class="section-title mb5">
        <h2>About Class IIa bacteriocin</h2>
      </div>

      <div class="section-content">
        <p class="section-img">
          <img src="../assets/mannose.jpeg" alt="" />
        </p>
        <div class="section-text">
          <p>
            Class IIa bacteriocins have been recognized to be a promising
            antibacterial agent due to their several excellent performances such
            as heat-stable, high biological activity, and they're generally
            recognized as safe (GRAS) status. The mechanisms of target cell
            recognition is both important yet poorly understood issues in the
            bacteriocins. Researchers have proved that the receptors for Class
            IIa bacteriocins is membrane-located proteins of the
            mannose-phosphotransferase system (man-PTS). In this study, we aimed
            to establish a machine learning model based on the sequence of
            bacteriocins and man-PTS. First, we used the Matrix of
            Sequence（MOS） to extract the sequence features of bacteriocin and
            man-PST, and then we used traditional machine learning models and
            deep neural networks to study protein interaction prediction based
            on amino acid sequence, and finally, we established a
            protein-protein interaction model between bacteriocins and man-PST
            by supervised machine learning. The model of protein interaction
            prediction explains the interaction mechanism between proteins on
            the overall level and discover new protein binding laws. It has
            important guiding significance in the fields of deciphering
            molecular mechanism, developing drugs and treatment optimization.<br />
          </p>
          <ul class="ul-check mt-5">
            <li><input type="checkbox" checked="true" />SAFETY</li>
            <li><input type="checkbox" checked="true" />EFFICIENT</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="footer">
    <div class="copyright">
      <p>
        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
        Copyright © 2020. All rights reserved | WANG LAB | Tsinghua University<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
      </p>
    </div>
  </div>
</template>

<script>
import navBarComp from "@/components/navBarComp";

export default {
  name: "HomePage",
  components: {
    navBarComp,
  },
};
</script>

<style scoped>
.site-section {
  padding: 2.5em 0;
}

.section-content {
  display: flex;
}

img,
.section-text {
  flex: 50%;
  padding: 0 15px;
}

.section-text {
  line-height: 1.7;
  font-family: Cambria, "Hoefler Text", "Liberation Serif", Times,
    "Times New Roman";
  font-size: 15px;
}

@media (min-width: 768px) {
  .site-section {
    padding: 7em 0;
  }
}

.mb5 {
  margin-bottom: 5px;
}

.section-title h2 {
  font-size: 25px;
  font-weight: 400;
  line-height: 1.2;
  border-bottom: 1px solid #222;
  position: relative;
  display: inline-block;
}
.section-title h2:before {
  position: absolute;
  content: "";
  height: 2px;
  background: #777;
}

.footer {
  font-size: 0.15rem;
  text-align: center;
  background-color: #f8f9fa;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
}
</style>