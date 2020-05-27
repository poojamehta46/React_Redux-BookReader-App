import React from "react";
import Rainbow from "../hoc/Rainbow";

const About = () => {
  return (
    <div className="Container">
      <h4 className="center">About</h4>
      <p>
        Earth, third planet from the Sun and the fifth largest planet in the
        solar system in terms of size and mass. Its single most outstanding
        feature is that its near-surface environments are the only places in the
        universe known to harbour life. It is designated by the symbol ♁.
        Earth’s name in English, the international language of astronomy,
        derives from Old English and Germanic words for ground and earth, and it
        is the only name for a planet of the solar system that does not come
        from Greco-Roman mythology.
      </p>
    </div>
  );
};

export default Rainbow(About);
