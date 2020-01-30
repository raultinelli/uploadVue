<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Upload extends Model
{
    protected $fillable = ['name', 'path'];
    protected $guarded = ['id', 'created_at', 'update_at'];
    protected $table = 'arquivos';

}
