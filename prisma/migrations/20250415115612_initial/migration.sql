-- CreateTable
CREATE TABLE `Organization` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `organizationName` VARCHAR(191) NOT NULL,
    `registrationNumber` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Organization_organizationName_key`(`organizationName`),
    UNIQUE INDEX `Organization_registrationNumber_key`(`registrationNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PayPeriod` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `year` INTEGER NOT NULL,
    `month` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Employee` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `staffNIN` VARCHAR(191) NOT NULL,
    `staffNssfNumber` VARCHAR(191) NOT NULL,
    `contributionType` VARCHAR(191) NOT NULL,
    `incomeType` VARCHAR(191) NOT NULL,
    `staffName` VARCHAR(191) NOT NULL,
    `staffBasicPay` INTEGER NOT NULL,
    `staffMedicalPay` INTEGER NOT NULL,
    `staffHousingPay` INTEGER NOT NULL,
    `staffBonus` INTEGER NOT NULL,
    `PAYE` INTEGER NOT NULL,
    `savings` INTEGER NOT NULL,
    `organizationId` INTEGER NOT NULL,
    `payPeriodId` INTEGER NOT NULL,

    UNIQUE INDEX `Employee_staffNIN_key`(`staffNIN`),
    UNIQUE INDEX `Employee_staffNssfNumber_key`(`staffNssfNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_organizationId_fkey` FOREIGN KEY (`organizationId`) REFERENCES `Organization`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_payPeriodId_fkey` FOREIGN KEY (`payPeriodId`) REFERENCES `PayPeriod`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
