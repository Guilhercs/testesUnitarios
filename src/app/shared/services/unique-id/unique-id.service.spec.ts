import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  let service: UniqueIdService = null;
  beforeEach(() => {
    service = new UniqueIdService();
  });
  it('#generateUniqueIdWithPrefix should generate id when called with prefix', () => {
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });
  it('should not generate duplicate Ids when called multiple times', () => {
    const ids = new Set();
    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });
  it('should return the number of generated ids when called', () => {
    service.generateUniqueIdWithPrefix('app');
    service.generateUniqueIdWithPrefix('app');
    expect(service.getNumberOfGenerateUniqueIds()).toBe(2);
  });
  it('should throw when called with empty', () => {
    const emptyValues = [null, undefined, '']
    emptyValues.forEach(element => {
      expect(() => service.generateUniqueIdWithPrefix(element)).toThrow()
    });
  })
});
