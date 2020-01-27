<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200127111607 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE movie_genre (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, tmdb_id INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE movie (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(255) NOT NULL, release_date DATE NOT NULL, vote_average DOUBLE PRECISION NOT NULL, tmdb_id INT NOT NULL, overview LONGTEXT NOT NULL, poster_path VARCHAR(255) NOT NULL, original_title VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE movie_movie_genre (movie_id INT NOT NULL, movie_genre_id INT NOT NULL, INDEX IDX_D294A5938F93B6FC (movie_id), INDEX IDX_D294A5939E604892 (movie_genre_id), PRIMARY KEY(movie_id, movie_genre_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE movie_user (movie_id INT NOT NULL, user_id INT NOT NULL, INDEX IDX_7EF5F7448F93B6FC (movie_id), INDEX IDX_7EF5F744A76ED395 (user_id), PRIMARY KEY(movie_id, user_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE serie (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(255) NOT NULL, first_air_date DATE NOT NULL, vote_average DOUBLE PRECISION NOT NULL, poster_path VARCHAR(255) NOT NULL, tmdb_id INT NOT NULL, overview LONGTEXT NOT NULL, original_title VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE film (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE movie_movie_genre ADD CONSTRAINT FK_D294A5938F93B6FC FOREIGN KEY (movie_id) REFERENCES movie (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE movie_movie_genre ADD CONSTRAINT FK_D294A5939E604892 FOREIGN KEY (movie_genre_id) REFERENCES movie_genre (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE movie_user ADD CONSTRAINT FK_7EF5F7448F93B6FC FOREIGN KEY (movie_id) REFERENCES movie (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE movie_user ADD CONSTRAINT FK_7EF5F744A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE movie_movie_genre DROP FOREIGN KEY FK_D294A5939E604892');
        $this->addSql('ALTER TABLE movie_movie_genre DROP FOREIGN KEY FK_D294A5938F93B6FC');
        $this->addSql('ALTER TABLE movie_user DROP FOREIGN KEY FK_7EF5F7448F93B6FC');
        $this->addSql('ALTER TABLE movie_user DROP FOREIGN KEY FK_7EF5F744A76ED395');
        $this->addSql('DROP TABLE movie_genre');
        $this->addSql('DROP TABLE movie');
        $this->addSql('DROP TABLE movie_movie_genre');
        $this->addSql('DROP TABLE movie_user');
        $this->addSql('DROP TABLE serie');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE film');
    }
}
