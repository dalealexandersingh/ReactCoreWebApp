using System.ComponentModel.DataAnnotations;

namespace WebAppApi.Database
{
    public class City
    {
        [Key]
        public int CityId { get; set; }
        public string Name { get; set; }
    }
}
