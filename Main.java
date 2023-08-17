import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        //Clears the Output.json before starting
        OutputData justToClear = new OutputData();
        StartInConsole startInConsole = new StartInConsole();
        justToClear.clearJsonFile();
        startInConsole.put();

        Scanner scanner = new Scanner(System.in);
        boolean exit = false;
        int i = 0;

        //Runs for as long as you dont type exit in the console
        while (!exit) {

            System.out.println("Please scan NFC-Chips");
            String inputData = scanner.nextLine();
            System.out.println(inputData);

            //Exits if the exit chip is scanned
            if (inputData.equals("9abc3c04"))
            {
                exit = true;
            }
            else {
                OutputData outputData = new OutputData(inputData, i);
                outputData.outputToJson();
                i++;
            }
        }
        scanner.close();

        //Automatically opens the GitHub Pages site and shows the Web Interface
        OpenWebInterface openWebInterface = new OpenWebInterface();
        openWebInterface.open();

    }
}