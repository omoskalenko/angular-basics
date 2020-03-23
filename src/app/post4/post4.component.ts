import { Component } from "@angular/core";


@Component({
  selector: 'app-post4',
  template: `
    <div class="post4">
      <h2>Post Titile</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus et est quo natus. Ut soluta, sunt perferendis. Assumenda, similique dolores eos quaerat, cum iste esse recusandae, sit exercitationem voluptate sed.</p>
    </div>
  `,
  styles: [`
    .post4 {
      padding: .5rem;
      border: 2px solid black
    }

    h2 {
      font-size: 1rem
    }
  `]
})

export class Post4Component {

}
