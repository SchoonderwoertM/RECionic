export class InspectionModel {
  constructor(id, completed, address, inspections) {
    this.id = id;
    this.street = address[0].street;
    this.housenumber = address[0].housenumber;
    this.residence = address[0].residence;
    this.inspectionDate = inspections[0].date;
    this.completed = completed;
    if (typeof inspections[0].damage[0] != "undefined")
      this.damageReport = new DamageReportModel(
        inspections[0].damage[0]
        );
    if (typeof inspections[0].maintenance[0] != "undefined")
      this.maintenanceReport = new MaintenanceModel(
        inspections[0].maintenance[0]
      );
    if (typeof inspections[0].installations[0] != "undefined")
      this.installationsReport = new InstallationModel(
        inspections[0].installations[0]
      );
    if (typeof inspections[0].modifications[0] != "undefined")
      this.modificationsReport = new ModificationsModel(
        inspections[0].modifications[0]
      );
  }
}

export class DamageReportModel {
  constructor(damage) {
    this.damLocation = damage.location;
    this.damNew = damage.new;
    this.damType = damage.type;
    this.damDate = damage.date;
    this.damAcuteAction = damage.acuteAction;
    this.damDescription = damage.description;
    this.damPhotos = damage.photos;
  }
}

export class MaintenanceModel {
  constructor(maintenance) {
    this.maintLocation = maintenance.location;
    this.maintType = maintenance.type;
    this.maintAcuteAction = maintenance.acuteAction;
    this.maintCost = maintenance.indicationOfCost;
    this.maintPhotos = maintenance.photos;
  }
}

export class InstallationModel {
  constructor(
    installations
  ) {
    this.techLocation = installations.location;
    this.techType = installations.type;
    this.techMalfunction = installations.reportedMalfunction;
    this.techTestProcedure = installations.testProcedure;
    this.techApproved = installations.approved;
    this.techComments = installations.comments;
    this.techPhotos = installations.photos;
  }
}

export class ModificationsModel {
  constructor(
    modifications
  ) {
    this.modiSituation = modifications.existingSituation;
    this.modiLocation = modifications.location;
    this.modiPerformedBy = modifications.performedBy;
    this.modiDescription = modifications.description;
    this.modiAction = modifications.action;
    this.modComments = modifications.comments;
    this.modPhotos = modifications.photos;
  }
}
