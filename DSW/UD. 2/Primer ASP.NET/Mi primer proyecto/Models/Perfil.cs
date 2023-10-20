using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Mi_primer_proyecto.Models
{
    public class Perfil
    {
        public int Id { get; set; }

        [DisplayName("Nombre")] //Cambia name por Nombre. Asi acepta ambos parametros

        public string Name { get; set; }

        public int Age { get; set; }

        [EmailAddress]
        public string Email { get; set; }
    }
}
