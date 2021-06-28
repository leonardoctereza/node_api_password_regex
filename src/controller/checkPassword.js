exports.isValid = function (req, res) {
  /* 
  Senha deve conter
  -Nove ou mais caracteres
  - Ao menos 1 dÃgito
  - Ao menos 1 letra minÃºscula
  - Ao menos 1 letra maiÃºscula
  - Ao menos 1 caractere especial
  - Considere como especial os seguintes caracteres: !@#$%^&*()-+
  - Nao possuir caracteres repetidos dentro do conjunto
   */

  try {
    const password = req.body.password;
    const regexFormat = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()-+])(?=.{9,})"
    );
    if (regexFormat.test(password) && !/(.).*\1/.test(password)) {
      return res.status(200).json({
        isValid: true,
      });
    }
    return res.status(200).json({
      isValid: false,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: "Error on validate password format",
    });
  }
};
