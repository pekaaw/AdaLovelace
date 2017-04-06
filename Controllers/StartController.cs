using Microsoft.AspNetCore.Mvc;

namespace AdaLovelace.Controllers
{
    public class StartController : Controller
    {
        public StartController()
        {
            
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}
