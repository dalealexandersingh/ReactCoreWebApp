using System.ComponentModel.DataAnnotations;

namespace WebAppApi.Database
{
    public class Person
    {
        [Key]
        public int PersonId { get; set; }
        public string Name { get; set; }
        public decimal Savings { get; set; }
        public DateTime DateOfBirth { get; set; }
        public int CityId { get; set; }
    }
}
