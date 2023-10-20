using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace AUT02_04_CodeFirst_HernandezJorge.Models
{
    public class Pokemon
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Campo Obligatorio")]
        [MaxLength(15, ErrorMessage = "El campo no puede tener más de 15 caracteres")]
        [MinLength(3, ErrorMessage = "El campo no puede tener menos de 1 caracter")]
        [DisplayName("Nombre")]

        public string Name { get; set; }

        [Required(ErrorMessage = "Campo Obligatorio")]
        [MaxLength(15, ErrorMessage = "El campo no puede tener más de 15 caracteres")]
        [MinLength(2, ErrorMessage = "El campo no puede tener menos de 2 caracter")]
        [DisplayName("Dueño")]

        public string Owner { get; set; }

        [Required(ErrorMessage = "Campo Obligatorio")]
        [MaxLength(15, ErrorMessage = "El campo no puede tener más de 15 caracteres")]
        [MinLength(3, ErrorMessage = "El campo no puede tener menos de 1 caracter")]
        [DisplayName("Tipo")]
        public string Type { get; set; }

        [Required(ErrorMessage = "Campo Obligatorio")]
        [MaxLength(15, ErrorMessage = "El campo no puede tener más de 15 caracteres")]
        [MinLength(0, ErrorMessage = "El campo no puede tener menos de 0 caracter")]
        [DisplayName("Fuerza")]

        public int Power { get; set; }







    }
}
