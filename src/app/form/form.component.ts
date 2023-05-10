import { Component } from '@angular/core';
import { PokeService } from '../poke.service';
import { Interface } from './../interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  id : number = 1;
  url : string = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png";
  poke : Interface = {} as Interface;

  constructor(private service: PokeService) {}

  ngOnInit(): void {
    this.atualizar();
  }

  atualizar()
  {
    this.service.getPoke(this.id).subscribe({

      next: novo => {
        this.poke = novo;
        this.atualizarImagem();
      }
    })
  }

  atualizarImagem()
  {
    var cod : string = "";

    if(this.id < 10)
    {
      cod = "00" + this.id;
    }
    else
    {
      if(this.id < 100)
      {
        cod = "0" + this.id;
      }
      else
      {
        cod += this.id;
      }
    }
    this.url = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + cod + ".png";
  }

  frente()
  {
    if(this.id != 1008)
      this.id ++;
    else
      this.id = 1;
    this.atualizar();
  }

  volta()
  {
    if(this.id != 1)
      this.id --;
    else
      this.id = 1008;
    this.atualizar();
  }
}
