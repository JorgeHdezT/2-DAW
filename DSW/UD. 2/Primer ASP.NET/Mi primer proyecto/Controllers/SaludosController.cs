using Mi_primer_proyecto.Models;
using Microsoft.AspNetCore.Mvc;
using System.Xml.Linq;

namespace Mi_primer_proyecto.Controllers
{
    // En la ruta solamente hay que poner Saludos.
    public class SaludosController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Despedida()
        {
            return View();
        }

        public IActionResult Despedida2(int ID, string nombre, int edad)
        {
            return Content("El usuario con ID: " + ID + " y nombre " + nombre + " se despide a sus " + edad + " años");
        }

        public string actionName(int ID)
        {
            return "Se ha recibido el parametro ID on valor: " + ID;
        }
        public string actionName2(string name, int age, string ciudad)
        {
            return "Mi amigo " + name + " tiene " + age + " años y vive en " + ciudad;
            // https://localhost:7103/Saludos/actionName2?name=Jorge&age=21&ciudad=Santa%20Cruz%20de%20Tenerife
        }

        public string actionName3(string year, int ID) {
            return "El usuario con id: " + ID + " es del año " + year;
            // https://localhost:7103/Saludos/actionName3?year=2001&ID=1
        }

        public IActionResult Felicita (int ID, string name, int edad)
        {
            /*
                ViewData["id"] = ID;
                ViewData["name"] = name;
                ViewData["edad"] = edad;
                return View();
            */

            Personaje personaje = new Personaje()
            {
                Id = ID,
                Name = name,
                Age = 22,
                Email = "Jorgeht2001@gmail.com"
            };
            return View(personaje);
        }

        public IActionResult Perfil (int ID, string name, int edad, string Email)
        {
            Perfil perfil = new Perfil()
            {
                Id = 1,
                Name = "Jorge",
                Age = 21,
                Email = "Jorgeht2001@gmail.com"
            };
            return View(perfil);
        }
    }
}
