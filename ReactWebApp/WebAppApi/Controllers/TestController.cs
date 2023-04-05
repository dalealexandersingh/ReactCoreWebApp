using Microsoft.AspNetCore.Mvc;

namespace WebAppApi.Controllers
{
    [Route("api/[controller]")]
    [TokenLib.AuthorizeAttribute]
    public class TestController : Controller
    {
        [Route("test")]
        [HttpGet]
        public IActionResult Test()
        {
            return Ok("test is successful");
        }
    }
}
