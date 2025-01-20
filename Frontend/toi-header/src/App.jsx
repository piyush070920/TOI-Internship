import React, { useEffect } from "react";
import toiData from "./assets/ToiData.json";
import "./App.css";
import Header from "./Components/Header/Header.jsx";

const App = () => {
  // console.log(import.meta.env.HEADER_API_KEY);
  const URL =import.meta.env.HEADER_API_KEY;
  // console.log(toiData);
  async function fetchData() {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
  }
  useEffect(() => {
    // fetchData();
  }, []);

  const headerData = toiData && toiData?.header ? toiData.header : {};
  return (
    <>
      <Header headerData={headerData} dateTime={toiData?.fgt} />
      <h1 className="mt-10">
        {" "}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus nobis
        earum cumque atque ea sed voluptas eum, libero, asperiores quibusdam
        maiores sit voluptatum in sapiente minus, et sequi doloribus quia
        tempore fuga at quae dolore porro! Quas autem beatae dicta excepturi
        blanditiis sunt recusandae molestias animi vel magni sapiente est iure,
        quam quos? Assumenda consequuntur facilis voluptatum aliquam odit, sit
        dolore, fuga adipisci nisi enim ipsum at animi doloribus modi ipsa non?
        Accusantium animi asperiores non sunt, consequuntur, mollitia minus modi
        aliquam, praesentium quos porro rem? Dolor enim nisi perferendis, ad
        sint voluptates amet reiciendis quis iste obcaecati in similique nobis
        debitis provident quos quibusdam unde eveniet eum repellat magni ea ut?
        Tempore voluptatem blanditiis inventore amet deleniti enim iusto esse,
        explicabo unde temporibus possimus natus quibusdam reiciendis earum
        consequatur? Architecto, reprehenderit velit accusamus deserunt nostrum
        labore ipsa explicabo, a nemo quo provident, eum perspiciatis aperiam.
        Quam, nulla dignissimos! Excepturi similique sequi eligendi eos quae
        minus dolore cupiditate quis ea sint perspiciatis facere, alias veniam,
        quam inventore quia officia. Laudantium minus quis soluta ut inventore
        earum a at. Dolorem rem, quos nihil quo est reiciendis et ad optio non.
        Cupiditate temporibus eum illum vel et debitis eaque obcaecati quaerat,
        quas modi, eveniet eius ab officiis eos? Recusandae assumenda placeat
        mollitia quidem corporis, nihil, minus alias corrupti libero optio unde
        eaque amet sapiente laboriosam provident ratione a tenetur iste, debitis
        et quis! Ut necessitatibus neque nam id ea, soluta repudiandae ducimus
        dolorem debitis dignissimos eligendi. Nemo ea voluptatibus
        necessitatibus at, amet doloremque fugit harum tempore laudantium earum
        quisquam tempora voluptatum veniam facere? Dolorum omnis, iure aliquid
        repellat odit laudantium porro illum natus aliquam doloribus cupiditate
        tempora minus consequatur repellendus iste eaque ratione, praesentium
        dolorem harum et rem numquam, esse dignissimos quis? Voluptate
        consequuntur corporis nemo ut? Rem commodi fugit recusandae dolores
        dignissimos. Repellendus, nam. Delectus magnam quaerat minima optio
        similique, consequuntur porro beatae alias numquam eum ab suscipit minus
        ex id doloribus at odio aut magni a repellendus et. Voluptatem sit nemo,
        voluptates obcaecati fuga asperiores vel quas perspiciatis recusandae
        molestias excepturi nihil quos. Aperiam blanditiis dolore necessitatibus
        fugiat ullam, aspernatur doloribus earum velit id quibusdam delectus
        voluptatem libero explicabo temporibus provident dolorem qui esse
        officiis asperiores adipisci facere? Quis ad perferendis quisquam
        dignissimos obcaecati accusantium aliquid nesciunt similique aspernatur
        ipsa beatae porro laborum quae, necessitatibus ab expedita minus veniam
        optio quibusdam, commodi consequuntur. Id necessitatibus, quasi soluta
        voluptate sequi saepe?Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Qui dolore itaque blanditiis non repellat facere unde
        aut eligendi vero totam, temporibus ullam suscipit voluptate beatae
        distinctio laboriosam saepe expedita enim molestiae! Libero ducimus nam
        explicabo iste, unde beatae nobis totam voluptatem, eligendi ipsum, non
        placeat? Necessitatibus, iusto. Autem magnam officia exercitationem
        itaque, delectus ratione doloremque quos minima et tempora perspiciatis
        voluptatem nobis laborum accusamus enim? Unde officia dolore aperiam, ea
        nostrum magni! Voluptatibus inventore quisquam eum eius facilis dolor
        reiciendis provident facere possimus? Praesentium nobis accusantium
        recusandae. Odio corporis possimus sint voluptas, accusantium earum
        saepe illo dignissimos odit soluta necessitatibus maiores, voluptatibus
        culpa perferendis nam! Modi adipisci explicabo, pariatur, ducimus eaque
        odio cumque dolorem alias, possimus non nostrum? Corrupti sunt, ut nobis
        in facilis cupiditate nesciunt sint ad dolorum! Aliquid, reprehenderit
        consectetur suscipit ab culpa perspiciatis dolor excepturi laborum,
        dolore aliquam officia odit sequi labore similique! Consequuntur quasi
        alias, odio distinctio, eveniet numquam quas eum ipsa enim eligendi
        aspernatur dolores fugiat officiis delectus magnam recusandae, dolor
        ipsam. Adipisci illum dolorum perferendis perspiciatis quod
        consequuntur, inventore pariatur optio, asperiores delectus nulla
        aliquam vitae est aspernatur. Laborum error culpa, odit libero iste
        illum totam voluptatem vero vel nobis? Quas, odit? Distinctio enim,
        dignissimos laboriosam hic minus iste amet explicabo, ipsum inventore
        rem adipisci unde ipsam cum. Sequi debitis fugiat optio sed explicabo
        numquam eligendi. Libero expedita maiores distinctio fugit voluptas
        optio nostrum aut blanditiis exercitationem. Aperiam blanditiis non sit
        eum ab nesciunt cum ratione ut modi officia, praesentium architecto,
        dolore reprehenderit ad quis corporis sint officiis adipisci? Facilis
        totam molestias dolor facere eaque, nulla excepturi. Nisi quas commodi,
        excepturi ratione mollitia unde nulla doloribus explicabo fuga cumque
        consequuntur molestiae vero officia earum voluptatum saepe vitae sit!
        Repellendus nulla cupiditate distinctio vero, obcaecati, eveniet in sed
        iusto quo maiores nostrum consequuntur dolorum ullam aliquid sequi, esse
        sint. Similique fuga rem dicta exercitationem velit, magnam harum minus
        odio nobis. Nesciunt temporibus placeat incidunt natus fugit quaerat,
        voluptatum rerum doloribus quidem repudiandae facere eveniet, culpa amet
        magni assumenda minus molestiae id, quos veritatis. Sapiente, doloremque
        nisi beatae quo reiciendis quisquam laboriosam modi quibusdam qui neque
        ab, sit magnam autem doloribus dolorem excepturi fugiat possimus maxime
        optio dignissimos repudiandae sint officia pariatur? Voluptate soluta
        suscipit, vel eos aliquid nam repellat dolor mollitia, qui ipsam odio
        sint quam eveniet adipisci excepturi? Consectetur dolore deleniti optio
        dolor sunt et quibusdam suscipit, fuga ipsa ab, error dolorum vitae
        omnis impedit corrupti esse. Odit distinctio ullam quas maiores culpa
        inventore recusandae non asperiores aperiam. Assumenda, quasi fuga illo
        est, tempora dolorum fugit natus quam similique laborum aperiam
        voluptatum nobis repellat molestias, cum quae praesentium. Nemo, facere!
        Repellat tempore aliquam dicta alias. Id a nemo numquam autem. Provident
        aperiam ipsa non culpa architecto necessitatibus iusto excepturi
        consectetur, voluptate incidunt! Vero quaerat ipsa dolorem animi nobis,
        consectetur aliquid, eius dolorum laboriosam nisi expedita saepe id
        mollitia, veritatis eum porro molestias vel consequatur reiciendis at.
        Quisquam, illum. Ab assumenda a molestiae nesciunt pariatur fugiat eius
        odio magni sint commodi architecto ipsum velit repellendus perferendis
        rem iste minus consequuntur, voluptatem sequi at itaque eligendi
        deleniti ut? Debitis nemo nesciunt, possimus accusantium voluptatibus
        vel velit soluta? Explicabo unde itaque obcaecati deleniti voluptas
        iure, possimus ea eaque animi distinctio eligendi ad iste reprehenderit
        cum. Doloribus quaerat in, beatae adipisci quisquam velit molestias
        molestiae amet placeat aspernatur dolores illo, magni cum sapiente natus
        totam! Id magnam recusandae nisi dolores voluptate nobis ipsum
        consequuntur tempore quaerat! Obcaecati, vel porro dolorem voluptates
        odit reprehenderit nihil mollitia! Natus corporis, fuga esse architecto
        dolorum similique est sunt nam ullam assumenda alias ipsum, repellendus
        voluptates repudiandae, excepturi suscipit ea provident quisquam tempore
        quasi possimus eligendi? Quaerat velit maiores quo enim illum voluptas
        minima delectus quasi at nulla exercitationem repellendus explicabo
        dolore sequi, natus fugiat praesentium cumque ipsam neque quam hic
        expedita doloribus repudiandae eaque. Temporibus saepe eius velit
        repellat sequi dolor molestiae dolorum vero suscipit id? Repellat
        mollitia soluta quidem, totam error quam, et eum earum qui eius dolore
        perferendis! Qui alias aliquid illum fugit quis tempore earum sunt magni
        quasi id incidunt, error temporibus sed quia neque odio. Cum, veniam?
        Est explicabo maxime quaerat tempore tempora aperiam similique repellat
        iusto doloribus? Officia saepe nostrum iste at maiores facilis sapiente
        aut voluptatum.
      </h1>
    </>
  );
};

export default App;
