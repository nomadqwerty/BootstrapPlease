import React from "react";

const Summary = () => {
  return (
    <div>
      <div>
        <ul className="summaryItems">
          <div>
            <i className="fa fa-user" aria-hidden="true"></i>
            <li>Pastor Fabian Oreke</li>
          </div>
          <div>
            <i class="fa fa-bookmark" aria-hidden="true"></i>
            <li>Sermon</li>
          </div>
          <div>
            <i class="fa fa-fire" aria-hidden="true"></i>
            <li>Build relationship with the Holy Spirit</li>
          </div>
          <div>
            <i class="fa fa-book" aria-hidden="true"></i>
            <li>
              Mathew 4:24, Hebrews 6:2, Galatians 14:36,Mathew 4:24, Hebrews
              6:2, Galatians 14:36,Mathew 4:24, Hebrews 6:2, Galatians 14:36,
            </li>
          </div>
        </ul>
        <div className="summaryText">
          <div className="messageIcon">
            <i className="fa fa-commenting" aria-hidden="true"></i>
            <p>Message:</p>
          </div>
          <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum. Why do we use it? It is a long established fact that a reader
            will be distracted by the readable content of a page when looking at
            its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed to using
            'Content here, content here', making it look like readable English.
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like). Where does it come from?
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.
          </p>
        </div>
      </div>
    </div>
  );
};

const Main2 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="row">
          <div className="col-lg-12 col-sm-12 col-12">
            <div className="main3">
              <Summary />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main2;
