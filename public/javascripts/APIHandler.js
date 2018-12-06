class APIHandler {
  constructor(baseUrl, container) {
    this.BASE_URL = baseUrl;
    this.conf = {
      headers: { 'X-RapidAPI-Key': "b1713b5bc8mshc67f60e6cc41cfbp103188jsnf5c8fb35caa1" }
    }
  }

  getFullList() {
    axios.get(this.BASE_URL + 'random?number=9', this.conf)
      .then(recipes => {
        console.log(recipes.data.recipes)
        $('#loader').addClass('d-none')

        recipes.data.recipes.forEach(recipe => {
          $('#recipe-container').append(`
              <div class="col-lg-4 col-md-6 col-s-12">
                <div class="card recipe-card">
                  <div class="recipe-card-image">
                    <img class="img-responsive" src=${recipe.image}>
                    <span class="recipe-card-title" style="background-color: rgba(0, 0, 0, 0.5)">${recipe.title}</span>
                  </div>
                  <div class="recipe-card-content">
                    <p>Ready in <strong>${recipe.readyInMinutes} minutes. </strong></p>
                  </div>
                  <div class="recipe-card-action">
                  <a href="/dashboard/recetas/${recipe.id}" class="btn btn-neutral">Detalle.</a>
                  </div>
                </div>
              </div>
          `)
        });
      })
      .catch(err => {
        console.log(err)
      })
  }
}