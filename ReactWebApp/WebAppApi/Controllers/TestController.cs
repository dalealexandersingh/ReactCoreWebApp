using Microsoft.AspNetCore.Mvc;
using WebAppApi.Database;
using WebAppApi.Extensions;
using WebAppApi.Models;

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

        [HttpPost]
        [Route("GetPeople")]
        public IActionResult GetPeople(TableSearchModel model)
        {
            using (var db = new ExampleDbContext())
            {
                var year = DateTime.Today.Year;

                var query = from people in db.People
                            join cities in db.Cities on people.CityId equals cities.CityId
                            select new
                            {
                                personid = people.PersonId,
                                name = people.Name,
                                dob = people.DateOfBirth,
                                age = year - people.DateOfBirth.Year,
                                city = cities.Name,
                                savings = people.Savings
                            };

                return query.GetPagedList(model);
            }
        }
    }
}
