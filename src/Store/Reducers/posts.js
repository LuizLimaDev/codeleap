import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';

const initialState = [
    {
        "id": uuid(),
        "userName": "Victor",
        "created_datetime": "datetime",
        "title": "My First Post at CodeLeap Network",
        "content": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "id": uuid(),
        "userName": "Victor",
        "created_datetime": "datetime",
        "title": "My Second Post at CodeLeap Network",
        "content": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "id": uuid(),
        "userName": "Victor",
        "created_datetime": "datetime",
        "title": "My third Post at CodeLeap Network",
        "content": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
        "id": uuid(),
        "userName": "Luiz",
        "created_datetime": "datetime",
        "title": "et ea vero quia laudantium autem",
        "content": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
    },
    {
        "id": uuid(),
        "userName": "Luiz",
        "created_datetime": "datetime",
        "title": "in quibusdam tempore odit est dolorem",
        "content": "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
    },
    {
        "id": uuid(),
        "userName": "Luiz",
        "created_datetime": "datetime",
        "title": "dolorum ut in voluptas mollitia et saepe quo animi",
        "content": "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
    },
    {
        "id": uuid(),
        "userName": "Tiffany",
        "created_datetime": "datetime",
        "title": "asperiores ea ipsam voluptatibus modi minima quia sint",
        "content": "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt"
    },
    {
        "id": uuid(),
        "userName": "Tiffany",
        "created_datetime": "datetime",
        "title": "dolor sint quo a velit explicabo quia nam",
        "content": "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse"
    },
    {
        "id": uuid(),
        "userName": "Tiffany",
        "created_datetime": "datetime",
        "title": "maxime id vitae nihil numquam",
        "content": "veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis"
    }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
});


export default postsSlice.reducer;