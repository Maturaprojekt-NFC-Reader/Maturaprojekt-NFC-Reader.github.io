import java.awt.Desktop;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;

public class OpenWebInterface {

    //Gets the URL and feeds it to the java.awt.Desktop
    public static void openWebPage(String url) {
        try {
            URI uri = new URI(url);
            Desktop.getDesktop().browse(uri);
            System.exit(0);
        } catch (IOException | URISyntaxException e) {
            e.printStackTrace();
            System.exit(1);

        }
    }

    //Contains the Link of the Website
    public static void open() {
            //String link = "https://maturaprojekt-nfc-reader.github.io/";
            String link = "http://localhost:63342/MP_NFC-READER_2023-24/src/main/resources/index.html?_ijt=u7b0kqh2a60d74ppja13nq84l6&_ij_reload=RELOAD_ON_SAVE";
            openWebPage(link);
        System.exit(0);

    }
}
