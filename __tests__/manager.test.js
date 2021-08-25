const Manager = require("../lib/manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should have name property and set it", () => {
      const name = "John Smith";
      const id = 1;
      const email = "test@example.com";

      const obj = new Manager(name, id, email);

      expect("name" in obj).toEqual(true);
      expect(obj.name).toEqual(name);
    });

    it("should have id property and set it", () => {
      const name = "John Smith";
      const id = 1;
      const email = "test@example.com";

      const obj = new Manager(name, id, email);

      expect("id" in obj).toEqual(true);
      expect(obj.id).toEqual(id);
    });

    it("should have an email property and set it", () => {
      const name = "John Smith";
      const id = 1;
      const email = "test@example.com";

      const obj = new Manager(name, id, email);

      expect("email" in obj).toEqual(true);
      expect(obj.email).toEqual(email);
    });

    it("should have officeNumber property and set it", () => {
        const name = "John Smith";
        const id = 1;
        const email = "test@example.com";
        const officeNumber = 98;
  
        const obj = new Manager(name, id, email, officeNumber);
  
        expect("officeNumber" in obj).toEqual(true);
        expect(obj.officeNumber).toEqual(officeNumber);
      });
  });

  describe("getName", () => {
    it("should return the name", () => {
      const name = "John Smith";
      const id = 1;
      const email = "test@example.com";

      const obj = new Manager(name, id, email);

      expect(obj.getName()).toEqual(name);
    });
  });

  describe("getId", () => {
    it("should return the id", () => {
      const name = "John Smith";
      const id = 1;
      const email = "test@example.com";

      const obj = new Manager(name, id, email);

      expect(obj.getId()).toEqual(id);
    });
  });

  describe("getRole", () => {
    it("should return the role", () => {
      const name = "John Smith";
      const id = 1;
      const email = "test@example.com";

      const obj = new Manager(name, id, email);

      expect(obj.getRole()).toEqual('Manager');
    });
  });

  
});
