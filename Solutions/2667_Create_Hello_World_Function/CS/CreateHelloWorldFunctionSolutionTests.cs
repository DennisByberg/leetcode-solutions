using Xunit;

namespace Solutions.CreateHelloWorldFunction;

public class CreateHelloWorldFunctionTests
{
    [Fact]
    public void CreateHelloWorld_ShouldReturnHelloWorld()
    {
        // Act
        var result = CreateHelloWorldFunctionSolution.CreateHelloWorldFunction();

        // Assert
        Assert.Equal("Hello World", result);
    }
}