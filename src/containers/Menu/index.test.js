import { fireEvent, render, screen } from "@testing-library/react";
import Menu from "./index";
import Page from "../../pages/Home/index";

describe("When Menu is created", () => {
  it("a list of mandatories links and the logo are displayed", async () => {
    render(<Menu />);
    await screen.findByText("Nos services");
    await screen.findByText("Nos réalisations");
    await screen.findByText("Notre équipe");
    await screen.findByText("Contact");
  });
 
describe("cliquer un lien de navigation du menu", () => {
  it("dirige l'utilisateur vers la section correspondante", () => {
    const { getByText, getByRole } = render(<Page />);
  
    const servicesNavLink = getByRole('link', { name: 'Nos services' });
    const realisationsNavLink = getByRole('link', { name: 'Nos réalisations' });
    const equipeNavLink = getByRole('link', { name: 'Notre équipe' });
  
    fireEvent.click(servicesNavLink);
    fireEvent.click(realisationsNavLink);
    fireEvent.click(equipeNavLink);
  
    expect(document.getElementById('nos-services')).toBeInTheDocument();
    expect(document.getElementById('nos-realisations')).toBeInTheDocument();
    expect(document.getElementById('notre-equipe')).toBeInTheDocument();
  });
});
  

  describe("and a click is triggered on contact button", () => {
    it("document location  href change", async () => {
      render(<Menu />);
      fireEvent(
        await screen.findByText("Contact"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      expect(window.document.location.hash).toEqual("#contact");
    });
  });
});
