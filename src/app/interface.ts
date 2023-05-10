export interface Interface{
  id: number;
  name: string;
  height: number;
  weight: number;
  abilities: [
    {
      ability:{
        name: string;
      },
      slot: number;
    }
  ];
  types: [
    {
      type: {
        name: string;
      }
    }
  ];
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      }
    }
  ]
}
